---
title: "Pre-Commit Hook Creation Guide"
subtitle: "A step-by-step guide to developing your own pre-commit hook."
excerpt: "Pre-commit hooks are a great way to help maintain code quality. However, some of your code quality standards may be specific to your project, and therefore, not covered by existing code linting and formatting tools. In this article, I will show you how to incorporate custom checks into your `pre-commit` setup."
date: "2024-09-04T14:55:00.000Z"
modified: "2024-09-13T23:38:00.000Z"
author: Stefanie Molin
tags: ["DevX", "pre-commit hooks", "Python"]
ogImage:
  url: "https://images.unsplash.com/photo-1614727187346-ec3a009092b0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  width: 1200
  height: 793
featured:
  - "[PyCoder's Weekly Issue #646](https://pycoders.com/issues/646)"
  - "[The Real Python Podcast Episode #220](https://realpython.com/podcasts/rpp/220/)"
---

![NASA astronaut performs extravehicular activity](https://images.unsplash.com/photo-1614727187346-ec3a009092b0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

<figcaption>

Photo by [NASA](https://unsplash.com/@nasa) on [Unsplash](https://unsplash.com/)

</figcaption>

Pre-commit hooks are a great way to help maintain code quality. However, while certain code quality measures are based on generally-accepted standards like [PEP&nbsp;8](https://peps.python.org/pep-0008/) for Python code, others may be specific to your project, and therefore, not covered by existing code linting and formatting tools. By creating your own hook, you can incorporate your project-specific checks into your `pre-commit` setup.

In this article, I will walk you through my recipe for creating pre-commit hooks. This is the recipe I teach in my [pre-commit workshop](/workshops/pre-commit-workshop/), and it is based on my experience building two publicly-available hooks: [`numpydoc-validation`](https://numpydoc.readthedocs.io/en/latest/validation.html#docstring-validation-using-pre-commit-hook) (which checks that docstrings follow [the numpydoc style guide](https://numpydoc.readthedocs.io/en/latest/format.html)) and [`exif-stripper`](https://github.com/stefmolin/exif-stripper) (which strips out any EXIF metadata from images added to version control).

*If you aren't familiar with `pre-commit`, take a moment to read through my article on [setting up pre-commit hooks](/articles/devx/pre-commit/setup-guide/) before proceeding.*

---

## What makes a good hook?

Not all code-quality checks make good pre-commit hooks. Helpful hooks run quickly, tell you what is wrong and where (the file and, potentially, line number), and fix the issue for you, if possible, or, if not guide you to the fix. Think carefully about what you are hoping to accomplish and whether it makes sense as a pre-commit hook, or whether including it only in your CI/CD workflow is a better solution.

## Hook recipe

Making a `pre-commit` hook is easier than it sounds once you break the process down into smaller pieces. For demonstration purposes, I will walk you through the process of creating a hook that validates filenames. My hook recipe comprises four steps:

1. [Design a check function](#step-1)
2. [Wrap the function in a CLI](#step-2)
3. [Make the check installable](#step-3)
4. [Create the `.pre-commit-hooks.yaml` file](#step-4)

*Disclaimer: This is how I like to break up the process. Others may present this information differently.*

### <a name="step-1"></a>1. Design a check function

The first step is to code up the logic for your check. This will be the hardest part of making your own hook since, as you will see, the remaining steps are mostly wiring things up. Your check function can do anything, but it should accept a single filename or sequence of filenames and return either a Boolean or an integer exit status.

Here's an example of checking that filenames are a minimum length and written in `snake_case`. The `is_valid_filename()` function works on one file at a time and returns `True` if the filename is at least `min_len` characters long and is in `snake_case`. Since this will be run on all files included in a commit, if any don't meet the naming criteria, this function will print out the failing filename(s) to make it easier to fix the issue(s):

```python
import re
from pathlib import Path


SNAKE_CASE_REGEX = re.compile('^[a-z_]+$')

def is_valid_filename(filename: str, min_len: int = 3) -> bool:
    # extract the name so that `/my/repo/x.py` becomes `x`
    name = Path(filename).stem

    if too_short := len(name) < min_len:
        print(f'Name too short ({min_len=}): {filename}')

    if not_snake_case := SNAKE_CASE_REGEX.search(name) is None:
        print(f'Filename is not in snake_case: {filename}')

    failure = too_short or not_snake_case
    return not failure
```

<figcaption>

Excerpt of `src/filename_validation/cli.py` in the [stefmolin/filename-validation](https://github.com/stefmolin/filename-validation) repository.

</figcaption>

Note that in addition to accepting the filename, this function also accepts an optional argument `min_len`, which is the minimum length for the check. Optional arguments like these allow users to adjust the hook without needing to fork it and change the code.

### <a name="step-2"></a>2. Wrap the function in a CLI

With the logic for the check in place, we begin working on the wiring. In `.pre-commit-config.yaml`, we can pass command line arguments to hooks upon invocation to modify their behavior &ndash; this is one way we could interact with the `min_len` optional argument we introduced in the previous step (another way is to read configuration options from `pyproject.toml`, but that is beyond the scope of this article).

You are free to implement your CLI as you wish as long as you accept a sequence of filenames as your positional arguments (lines 9-13 below). Here, we will use `argparse` from the standard library (be sure to check out the [tutorial](https://docs.python.org/3/howto/argparse.html) in the official Python documentation if you aren't familiar):

```python[class="line-numbers"]
import argparse
from typing import Sequence


def main(argv: Sequence[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        prog='validate-filename',
    )
    parser.add_argument(
        'filenames',
        nargs='*',
        help='Filenames to process.',
    )
    parser.add_argument(
        '--min-len',
        default=3,
        type=int,
        help='Minimum length for a filename.',
    )

    args = parser.parse_args(argv)

    results = [
        not is_valid_filename(filename, args.min_len)
        for filename in args.filenames
    ]
    return int(any(results))
```

<figcaption>

Excerpt of `src/filename_validation/cli.py` in the [stefmolin/filename-validation](https://github.com/stefmolin/filename-validation) repository. Note that this is in the same file as the `is_valid_filename()` function; if you place it in a separate file, you will need to import it here.

</figcaption>

In addition to the positional arguments (filenames), we add the `--min-len` optional argument on lines 14-19, defaulting to `3`, which will be passed into `is_valid_filename()` as the `min_len` argument. Note that, with the exception of line 7 and lines 14-19, lines 1-21 are boilerplate for any hook you create.

On lines 23-27, we need to loop over all received filenames and aggregate the results of whether the filename is *not* valid. This is because we need to return an exit status from the `main()` function: if we return `0`, then we are telling `pre-commit` that everything passed; if we return anything else, `pre-commit` will mark a failure for this check.


### <a name="step-3"></a>3. Make the check installable

In order to use our hook, `pre-commit` needs to be able to install it. For modern Python projects, we use the `pyproject.toml` file to define project metadata and dependencies. Tools like `pip` can install a project (and any required dependencies) based on the information inside this file. Here's a minimal `pyproject.toml` for the filename validation hook. Note that since we are only using the standard library for the check function and CLI, there are no dependencies listed on line 21:

```toml[class="line-numbers"]
[build-system]
build-backend = "setuptools.build_meta"
requires = ["setuptools", "setuptools-scm"]

[project]
name = "filename-validation"
description = "Pre-commit hook to validate Python filenames."
readme = "README.md"
keywords = ["filename validation", "pre-commit"]
license = {file = "LICENSE"}
authors = [
  {name = "Stefanie Molin", email = "email@example.com"},
]
classifiers = [
    "Development Status :: 3 - Alpha",
    "Programming Language :: Python"
]
version = "0.1.2"

requires-python = ">=3.10"
dependencies = []
optional-dependencies.dev = ["pre-commit", "pytest"]

scripts.validate-filename = "filename_validation.cli:main"

[project.urls]
Homepage = "https://github.com/stefmolin/filename-validation"
Documentation = "https://github.com/stefmolin/filename-validation"

[tool.setuptools.packages.find]
where = ["src"]
```

<figcaption>

Simplified package configuration from the `pyproject.toml` file in the [stefmolin/filename-validation](https://github.com/stefmolin/filename-validation) repository.

</figcaption>

Optionally, you can create an executable for your hook upon installation. This is achieved by adding a `scripts.your-script-name` entry to the `[project]` section of your `pyproject.toml` as shown in line 24 (reproduced below). Note that `validate-filename` is the name of the executable that will be created when the repository is installed:

```toml
scripts.validate-filename = "filename_validation.cli:main"
```

The string on the right side is the path to what should be run when the executable is invoked: the part before the colon is an import path of a module and the part after the colon is the function to call in that module. For the filename validation example, we want the `main()` function from the `filename_validation.cli` module to be called when the executable is run. Note that we cannot pass arguments here, but since `main()` is a CLI, we can pass command line arguments to modify its behavior as needed.

### <a name="step-4"></a>4. Create the `.pre-commit-hooks.yaml` file

For `pre-commit` to install and use our hook, we need to create a `.pre-commit-hooks.yaml` file. A repository can expose multiple hooks, so this file is formatted as a YAML list:


```yaml
- id: validate-filename
  name: validate filename
  description: This hook ensures that Python filenames follow best practices.
  entry: validate-filename
  language: python
  types: [python]
```

<figcaption>

The contents of `.pre-commit-hooks.yaml` in the [stefmolin/filename-validation](https://github.com/stefmolin/filename-validation) repository.

</figcaption>

Let's break down the contents of this file:
- `id`: specifies the `id` we will use in the `.pre-commit-config.yaml` file to refer to this hook
- `name`: the display name that will be used in the `pre-commit` output
- `description`: optional metadata
- `entry`: the command that `pre-commit` will run to invoke the hook &ndash; note that this is the executable we created in the previous step
- `language`: the language the hook is written in, which lets `pre-commit` know how to install the repository
- `types`: (optional) specify the types of files to run this hook on &ndash; note that all of the descriptors much match for a file to trigger the hook (use `types_or` if you are specifying non-overlapping types)

*If you would like to learn more about how `pre-commit` uses this file, check out my [A Behind the Scenes Look at How Pre-Commit Works](/articles/devx/pre-commit/behind-the-scenes/) article.*

---

## Test the hook

Once you have finished the steps in the recipe, you can test that your hook can actually be used with `pre-commit`. One way to do this is with `pre-commit try-repo`. Make sure you have committed all of the files you worked on so far before proceeding.

To test the filename validation hook, let's create a file that will fail the check (`x.py`):

```shell[class="command-line"][data-prompt="$"]
touch x.py
```

Now, we can call `pre-commit try-repo` on the current directory (`.`) and have it run on only the `x.py` file we just created. Notice that `pre-commit` creates a configuration just like what we would see in a `.pre-commit-config.yaml` file for this test and is using the `validate-filename` hook at the latest commit (`rev`):

```shell[class="command-line"][data-prompt="$"][data-output="2-19"]
pre-commit try-repo . --files x.py
[INFO] Initializing environment for ..
=============================================================
Using config:
=============================================================
repos:
-   repo: .
    rev: e11041f74c8a0f074f0633138506dce2efe9c5e7
    hooks:
    -   id: validate-filename
=============================================================
[INFO] Installing environment for ..
[INFO] Once installed this environment will be reused.
[INFO] This may take a few minutes...
validate-filename......................................Failed
- hook id: validate-filename
- exit code: 1

Name too short (min_len=3): x.py
```

As expected, `x.py` fails the test, and this information is printed out for us to address the error. At this stage, we are testing whether `pre-commit` can use the hook correctly &ndash; to test that the check itself is correct, we can test it as we would any other Python code. I recommend creating a test suite for the check function itself, in addition to the CLI wrapper, but you can begin by calling the function inside a Python shell with some test values and then moving on to testing the executable on the command line. You can find an example test suite for this hook [here](https://github.com/stefmolin/filename-validation/blob/main/tests/test_cli.py).

If your hook function and CLI are working properly, but the `pre-commit` side isn't, you may have errors in your `.pre-commit-hooks.yaml` file &ndash; check out my [troubleshooting guide](/articles/devx/pre-commit/troubleshooting-guide/) for help deciphering common error messages.

---

## Next steps

Once you have a working hook, make sure to push up your changes to a public repository (it doesn't have to be on GitHub). Next, you should create a tag so that people can point to specific version of the hook (rather than using a commit hash):

```shell[class="command-line"][data-prompt="$"]
git tag -a <version> -m "<tag description>"
git push --tags
```

Be sure to add something like this to your README so people can easily include your hook in their `.pre-commit-config.yaml` files:

```yaml
- repo: https://github.com/stefmolin/filename-validation
  rev: 0.1.2
  hooks:
    - id: validate-filename
```

The README is also a good spot to document any configuration options your hook supports (like the `--min-len` option). Often, this is done by providing an additional usage example:

```yaml
- repo: https://github.com/stefmolin/filename-validation
  rev: 0.1.2
  hooks:
    - id: validate-filename
      args: [--min-len=5]
```

Congratulations on your new hook &ndash; go out and spread the word!

---

In this article, we walked through the process of creating your own pre-commit hook from coding up the check in a function and exposing it via a CLI to configuring the `.pre-commit-hooks.yaml` file so `pre-commit` can install and use your hook. Let me know in the comments below and/or on social media ([LinkedIn](https://www.linkedin.com/in/stefanie-molin/) or [X](https://twitter.com/StefanieMolin)) what you end up making!
