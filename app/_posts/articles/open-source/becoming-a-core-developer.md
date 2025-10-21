---
title: "Becoming a Core Developer"
subtitle: "My journey from numpydoc user to maintainer."
excerpt: "Throughout your open source journey, you have no doubt been interacting with the core development team of the projects to which you have been contributing. Have you ever wondered how people become core developers of a project? In this post, I share my journey to becoming a core developer of numpydoc."
date: "2025-10-06T08:00:00.000-05:00"
preview: true
author: Stefanie Molin
tags: ["open source", "open source contribution", "open source software", "pre-commit hooks", "Python"]
assets: "/assets/articles/open-source/becoming-a-core-developer"
ogImage:
  url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  width: 1200
  height: 800
---

![teamwork](https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

<figcaption>

Photo by [Helena Lopes](https://unsplash.com/@helenalopesph) on [Unsplash](https://unsplash.com/)

</figcaption>

Throughout your open source journey, you have no doubt interacted with the core development team of the projects you contributed to. Have you ever wondered how people become core developers of a project?

To be a core developer, you don't necessarily have to know the most about the project or be the most technical. Just like there are a variety of [ways to contribute to a project](/articles/open-source/5-ways-to-get-started-in-open-source/), there are a variety of ways to add value as a part of the core development team: CI/CD, documentation, feature development, release management, testing, triage, *etc.* Each member of the team will have different strengths and weaknesses, but they will all be passionate about the project, which makes it possible for them to work together on moving the project forward.

Below I share my journey to becoming a core developer of numpydoc, from first learning about the project and identifying pain points, to adding value in a way that made sense for me and, eventually, joining the team. You will also learn a little bit about some useful modules in the Python standard library for analyzing code.

---

## First exposure to numpydoc

In July 2022, I participated in my first open source development sprint with the Scikit-Learn team at EuroPython. We focused on [fixing docstrings](https://github.com/scikit-learn/scikit-learn/issues/21350) for existing code to align with the [numpydoc standard](https://numpydoc.readthedocs.io/en/latest/format.html), which is widely used in the scientific Python community. I was new to numpydoc, but I immediately understood the benefit of having consistent docstrings like the example below &ndash; something that is very hard to do when relying strictly on human validation:

```python
def distance(self, x: Number, y: Number) -> float:
    """
    Calculate the minimum distance from the points of this shape
    to a point (x, y).

    Parameters
    ----------
    x, y : numbers.Number
        Coordinates of a point in 2D space.

    Returns
    -------
    float
        The minimum distance from the points of this shape
        to the point (x, y).
    """
    return np.min(
        np.linalg.norm(np.array(self.points) - np.array((x, y)), ord=2, axis=1)
    )
```

<figcaption>

Example of a docstring following the numpydoc style, ignoring rules ES01, EX01, SA01, and SS06. Excerpt taken from [stefmolin/data-morph](https://github.com/stefmolin/data-morph/blob/main/src/data_morph/shapes/bases/point_collection.py) on February 15, 2025 at 12:39 PM EST.

</figcaption>

As we made our changes, we would run a [script](https://github.com/scikit-learn/scikit-learn/blob/5aece174103f3b1238c2ed8ac6cc246977c42520/sklearn/tests/test_docstrings.py) to test whether we had addressed all the docstring issues that numpydoc validated. This script was written by the Scikit-Learn team to analyze the entire package at once, as, back then, numpydoc only worked on one entity at a time. Towards the end of the sprint, one of the maintainers there told me about the `pre-commit` tool, which, when installed (see my [How to Set Up Pre-Commit Hooks](/articles/devx/pre-commit/setup-guide/) article) in the Scikit-Learn repository on my machine, would run a series of checks selected by the Scikit-Learn team on the code. I began to wonder why the numpydoc validation wasn't being performed as a pre-commit check.

## Building a pre-commit hook for numpydoc

When I got back home, I researched `pre-commit`, and, at work, I built a numpydoc validation pre-commit check. It wasn't until I began working on one of my personal projects, [Data Morph](https://stefaniemolin.com/data-morph), that I needed the numpydoc validation pre-commit check outside of work, so I got permission from my employer to open source it.

[I approached the numpydoc team](https://github.com/numpy/numpydoc/issues/450) to see if they were interested and indeed they were. However, when I tried to port the code, I realized that what I built was actually unusable for most use cases because of how numpydoc worked: in order to inspect the code, numpydoc needed to import it, but since `pre-commit` creates a separate environment for running the checks, the code would also need to be installed in this environment (see my [A Behind-the-Scenes Look at How Pre-Commit Works](/articles/devx/pre-commit/behind-the-scenes/) article). Pre-commit checks need to be fast, and this would make it way too slow. At this point, I realized this wouldn't be that easy, and that, perhaps, this was the reason the hook didn't exist already.

### Creating numpydoc's static code analysis functionality

At the time, numpydoc used the `Validator` class to import the Python code for inspection. It provides properties to  access information about the object and its docstring (*e.g.*, signature parameters and file name), which are used during the docstring validation checks. While this worked fine for existing applications, I needed to analyze the code *without* running it in order to build a pre-commit hook for numpydoc. This process is called **static code analysis**.

I had no clue how to perform static code analysis at the time, yet alone in Python. Thankfully, Python has a great open source community, so I knew someone had definitely solved this problem before. That's when I realized I had been using some static code analysis tools already &ndash; `black` for one. How did `black` and other Python tools with pre-commit hook functionality do it? After poking around a few such codebases on GitHub, I had my answer: the `ast` module in the Python standard library.

The `ast` module provides tools to work with **Abstract Syntax Trees** (ASTs) in Python. An AST represents a program (Python in this case) using a tree structure in which the nodes are components of the language's grammar, for example, `if` statements and class/function definitions. By simply reading the contents of a file, the `ast` module can parse *syntactically-valid* source code into an AST, which can then be traversed to perform static code analysis.

Without going into the gory details here, I spent the weekend creating an alternative to the existing `Validator` class: the `AstValidator` class. When running numpydoc as a static code analyzer, the new `AstValidator` class replaces the existing `Validator` class; otherwise, the `Validator` class is used, which ensures existing workflows are unaffected. The `AstValidator` overrides the `Validator` class's logic to use AST-compatible logic, which eliminates the need to import the Python code. For example, instead of inspecting the Python object, we check what kind of AST node we have:

```diff-python
  @property
  def is_function_or_method(self):
-     return inspect.isfunction(self.obj)
+     return isinstance(self.node, (ast.FunctionDef, ast.AsyncFunctionDef))
```

<figcaption>

The logic marked as removed is how the `Validator` implements this check; the logic marked as added is how the `AstValidator` implements the check. Excerpt taken from the initial PR to add this functionality to [numpy/numpydoc](https://github.com/numpy/numpydoc/pull/454).

</figcaption>

The `AstValidator` class works on individual nodes in the AST, but how do we get the AST node in the first place? Python's `ast` module includes the `ast.parse()` function, which parses source code as a string into an AST (assuming the source code contains valid Python code). The AST returned is rooted at an `ast.Module` node. In order to inspect everything in that module, we must traverse the tree starting at the root and validate each of the nodes that should have docstrings as we encounter them. To do so, I created the `DocstringVisitor` class, which is a subclass of `ast.NodeVisitor`. The `visit()` method defines what we do when we visit each node. Here, we only do something if the node represents a module, class, or function:

```python
def visit(self, node: ast.AST) -> None:
    """
    Visit a node in the AST and report on numpydoc validation issues.

    Parameters
    ----------
    node : ast.AST
        The node to visit.
    """
    if isinstance(
        node, (ast.Module, ast.ClassDef, ast.FunctionDef, ast.AsyncFunctionDef)
    ):
        self.stack.append(
            self.module_name if isinstance(node, ast.Module) else node.name
        )
        self._get_numpydoc_issues(node)
        self.generic_visit(node)
        _ = self.stack.pop()
```

<figcaption>

Example of an `ast.NodeVisitor.visit()` method as implemented in the `DocstringVisitor` class. Excerpt taken from the initial PR to add this functionality to [numpy/numpydoc](https://github.com/numpy/numpydoc/pull/454).

</figcaption>

*If you are interested in learning more about ASTs, be sure to check out [my keynote at PyCon Lithuania 2025](/talks/#build-your-own-(simple)-static-code-analyzer).*

### The pre-commit hook

Using the AST solved the feasibility issue, and turning this into a pre-commit hook didn't require much effort afterward (see my [Pre-Commit Hook Creation Guide](/articles/devx/pre-commit/hook-creation-guide/), if you are curious how to do that). The `numpydoc-validation` pre-commit hook is available in numpydoc versions 1.6.0 and higher. Configure it on your repository by adding the following to your `.pre-commit-config.yaml` file:

```yaml
- repo: https://github.com/numpy/numpydoc
  rev: <version>
  hooks:
    - id: numpydoc-validation
```

Please consult the [documentation](https://numpydoc.readthedocs.io/en/latest/validation.html#docstring-validation-using-pre-commit-hook) for implementation specifics.

### Bells and whistles

While the hook was definitely useable at this point, it was missing some functionality that users of these tools come to expect like configuration options in `pyproject.toml` and inline comments to ignore checks on specific lines.

#### Configuration options

Using a dedicated section in `pyproject.toml`, I added support for a few different configuration options, which you can see below. The supported options have since grown, so be sure to check out [the documentation](https://numpydoc.readthedocs.io/en/latest/validation.html) for the latest options:

```toml
[tool.numpydoc_validation]
checks = [
  "all",  # report on all checks
  "ES01", # but don't require an extended summary
  "EX01", # or examples
  "SA01", # or a see also section
  "SS06", # and don't require the summary to fit on one line
]
exclude = [ # don't report on checks for these
  '\.__init__$',
  '\.__repr__$',
  '\.__str__$',
]
override_SS05 = [ # allow docstrings to start with these words
  '^Process ',
  '^Assess ',
  '^Access ',
]
```

<figcaption>

Example `numpydoc-validation` hook configuration in `pyproject.toml`. Excerpt taken from [stefmolin/data-morph](https://github.com/stefmolin/data-morph/blob/main/pyproject.toml) on February 15, 2025 at 12:39 PM EST.

</figcaption>

To implement this, I used the `tomllib` module in the standard library (introduced in Python 3.11), which made quick work of finding the dedicated numpydoc section. However, I also wanted to automatically detect the `pyproject.toml` file for the user instead of requiring them to pass the path to it because it is a standard name and typically in a standard location (the root of the repository). This wasn't as straightforward, so I once again researched how other tools do this and adapted the logic that `black` had.


#### Ignoring checks with inline comments

The checks defined in the `pyproject.toml` configuration apply to the project globally. For flexibility, I wanted to make it possible to turn off checks on a per-docstring basis using inline comments. For example, the following bypasses the checks for parameter (PR01) and return value (RT01) documentation in a single function docstring:

```python
def _ease(
    frame: int, *, min_value: Number, max_value: Number
) -> Number:  # numpydoc ignore=PR01,RT01
    """Determine the next value with easing."""
    return (max_value - min_value) * ease_in_out_quadratic(
        (iterations - frame) / iterations
    ) + min_value
```

<figcaption>

Example of using inline comments to have numpydoc ignore rules PR01 and RT01 for the `_ease()` function. Excerpt taken from [stefmolin/data-morph](https://github.com/stefmolin/data-morph/blob/main/src/data_morph/morpher.py) on February 15, 2025 at 3:39 PM EST.

</figcaption>

This can't be done with the AST alone because, when the `ast` module parses source code to generate an AST, it discards some information that is irrelevant for that representation, such as formatting and comments. This means that inline comments like the example above are not present at all in the AST.

To extract inline comments, we need to use a **parse tree** instead. A parse tree retains the full structure of the code, but it isn't as easy to work with or as efficient as the AST. The leaves of the parse tree are called **tokens** and can be extracted with the `tokenize` module from the standard library. Tokens have a type, one of which is `token.COMMENT`, so it's easy to isolate only those that are comments, and, from there, match comments prefixed with `numpydoc ignore` to their corresponding AST nodes using the line number, saving the validation checks that should be ignored.

## CLI improvements

After the `numpydoc-validation` pre-commit hook was merged, I did some work to [streamline the numpydoc CLI](https://github.com/numpy/numpydoc/pull/476) and bring some of the functionality that only existed on the pre-commit hook side to other parts of the project. With these changes, we can now run `numpydoc lint` to run numpydoc validation on entire Python files using the AST logic:

```shell[class="command-line"][data-prompt="$"][data-output="2-9"]
numpydoc lint file_a.py file_b.py
+-------------+----------------+-------+--------------------------------------+
| file        | item           | check | description                          |
+=============+================+=======+======================================+
| file_a.py:1 | file_a         | GL08  | The object does not have a docstring |
| file_a.py:9 | file_a.read    | PR04  | Parameter "field" has no type        |
| file_b.py:8 | file_b.Bot.run | RT03  | Return value has no description      |
+-------------+----------------+-------+--------------------------------------+
```

This solved one of the pain points I had when first trying to use numpydoc on a personal project: I wanted to be able to validate the docstrings of an entire module without needing to write a script or test suite to do so. Since I'm a user of the numpydoc, I'm passionate about making that experience better.

## Welcome to the team

In April 2024, some time after the `numpydoc-validation` pre-commit hook and `numpydoc lint` CLI went live, I was invited to become a core contributor. One of my favorite things since joining has been seeing issues come in that show people have switched their projects over to the tools I built.

It's important to note that, while I wrote and am very familiar with the `AstValidator` and pre-commit hook implementation and am well-versed with the CLI, I am not very familiar with other areas like the Sphinx logic or the docscraping logic that predates my involvement. However, others in the team have deep understanding of these areas, and lean on me for my strengths. This is what makes a development team successful &ndash; we complement each other.

---

Are you hoping to become a core developer of a project? The exact process will depend on the project, and in some cases, may be written down, like the "[How to join the core team](https://devguide.python.org/core-team/join-team/index.html)" page in Python Developer's Guide. My advice is to continue making quality contributions to the project in a way that makes sense for you and is sustainable. Maintainers will notice contributors that are having a positive impact on the project and are passionate about it &ndash; these are the people they want to work with after all.
