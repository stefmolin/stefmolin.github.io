---
title: "Common Pre-Commit Errors and How to Solve Them"
subtitle: "A troubleshooting guide for pre-commit hooks."
excerpt: "Having issues with your `pre-commit` setup? In this troubleshooting guide, I've collected the most common errors `pre-commit` users face and provided explanations and guidance for fixing them."
date: "2024-08-06T12:00:00.000Z"
author: Stefanie Molin
tags: ["DevX", "pre-commit hooks", "Python", "troubleshooting"]
ogImage:
  url: "/assets/articles/troubleshooting-guide.png"
  width: 1696
  height: 956
---

Having issues with your `pre-commit` setup? In this troubleshooting guide, I've collected the most common errors `pre-commit` users face and provided explanations and guidance for fixing them. If you are new to `pre-commit` or would like a refresher, I would recommend you start with my [How to Set Up Pre-Commit Hooks](/articles/devx/pre-commit/setup-guide/) article.

---

### Pick an issue to troubleshoot

Issues running `pre-commit`:
- [pre-commit: command not found / command not found: pre-commit](#pre-commit-command-not-found)
- [\`pre-commit\` not found. did you forget to activate your virtualenv?](#pre-commit-not-found-did-you-forget-to-activate-your-virtualenv)

Issues with `.pre-commit-config.yaml`:
- [.pre-commit-config.yaml is not a file](#pre-commit-configyaml-is-not-a-file)
- [\[ERROR\] Your pre-commit configuration is unstaged](#error-your-pre-commit-configuration-is-unstaged)
- [InvalidConfigError](#invalidconfigerror)

Issues with `.pre-commit-hooks.yaml`:
- [.pre-commit-hooks.yaml is not a file](#pre-commit-hooksyaml-is-not-a-file)
- [InvalidManifestError](#invalidmanifesterror)

---

## <a name="pre-commit-command-not-found"></a>pre-commit: command not found / command not found: pre-commit

You are most likely seeing this because you (or some process) attempted to run `pre-commit` on the command line and got something like this as your error message:

```shell[class="command-line"][data-prompt="$"][data-output="2"]
pre-commit run
zsh: command not found: pre-commit
```

### The fix

If you already installed the `pre-commit` package, you probably need to activate the virtual environment in which you installed, as the `pre-commit` executable gets created after you install the package.

If you haven't installed `pre-commit` at all, then I suggest you start from my [How to Set Up Pre-Commit Hooks](/articles/devx/pre-commit/setup-guide/) article.

---

## <a name="pre-commit-not-found-did-you-forget-to-activate-your-virtualenv"></a>\`pre-commit\` not found. did you forget to activate your virtualenv?

If you are seeing this error, it means that at some point you successfully installed pre-commit hooks in your repository, and `pre-commit` is registered with Git's hooks system, but [the script registered with Git](/articles/devx/pre-commit/behind-the-scenes/) is not able to run `pre-commit` as a Python module (with `-m`) and also cannot find the `pre-commit` executable.

### The fix

Assuming you did not uninstall `pre-commit`, you should follow the suggestion and activate your virtual environment. However, if you did uninstall it or just want a refresher on how to set it up properly, check out my [How to Set Up Pre-Commit Hooks](/articles/devx/pre-commit/setup-guide/) article.

---

## <a name="pre-commit-configyaml-is-not-a-file"></a>.pre-commit-config.yaml is not a file

This means that `pre-commit` was unable to find a `.pre-commit-config.yaml` file in your repository.

### The fix

If you did create a configuration file, make sure you didn't make a typo with the filename and that it is at the root of your repository. Note that you are free to call the file whatever your wish; however, `pre-commit` will only find it automatically when you name it `.pre-commit-config.yaml`. If you want to use a different name, you will need to pass `--config <your-file>` when you `install`, `run`, or use any other `pre-commit` subcommand that needs a configuration file.

If you did not create a configuration file, I suggest you start from my [How to Set Up Pre-Commit Hooks](/articles/devx/pre-commit/setup-guide/) article.

---

## <a name="error-your-pre-commit-configuration-is-unstaged"></a>\[ERROR\] Your pre-commit configuration is unstaged

This means that you changed your `.pre-commit-config.yaml` file since your last commit and `pre-commit` isn't sure which configuration you actually want to use: the original one or the one you are considering but haven't committed to yet.

```
[ERROR] Your pre-commit configuration is unstaged.
`git add .pre-commit-config.yaml` to fix this.
```

### The fix

If you do want to use your updates, stage your changes to the configuration:

```shell[class="command-line"][data-prompt="$"]
git add .pre-commit-config.yaml
```

If not, undo the changes:

```shell[class="command-line"][data-prompt="$"]
git restore .pre-commit-config.yaml
```

If you don't want to undo the changes, you can also `stash` them for later.

---

## <a name="invalidconfigerror"></a>InvalidConfigError

If you see an error that looks like this, your `.pre-commit-config.yaml` file is malformed. This could mean you have the wrong data types, missing keys, or that the YAML itself is invalid as shown here:

```shell[class="command-line"][data-prompt="$"][data-output="1-7"]
An error has occurred: InvalidConfigError:
==> File .pre-commit-config.yaml
=====> while parsing a block mapping
  in "<unicode string>", line 1, column 1
did not find expected key
  in "<unicode string>", line 46, column 1
Check the log at /Users/stefanie/.cache/pre-commit/pre-commit.log
```

### The fix

Open up your `.pre-commit-config.yaml` file, and make sure all the indentation is correct &ndash; this is most often the problem. You can run the following to check whether you fixed the issue (take note of the line number &ndash; in this example, the file's incorrect indentation is at line 46):

```shell[class="command-line"][data-prompt="$"][data-output="2-7"]
pre-commit validate-config .pre-commit-config.yaml

=====> while parsing a block mapping
  in "<unicode string>", line 1, column 1
did not find expected key
  in "<unicode string>", line 46, column 1
Check the log at /Users/stefanie/.cache/pre-commit/pre-commit.log
```

Be sure to read the error messages for the specifics of what needs to be fixed in your file as you may have invalid keys or data types to fix as well.

---

## <a name="pre-commit-hooksyaml-is-not-a-file"></a>.pre-commit-hooks.yaml is not a file

This means that `pre-commit` was unable to find a `.pre-commit-hooks.yaml` file in one of the repositories you are attempting to use hooks from.

### The fix

If you are trying to create your own hook, make sure you have committed a `.pre-commit-hooks.yaml` file to the repository, and be sure to check out my [How to Create a Pre-Commit Hook](/articles/devx/pre-commit/hook-creation-guide/) article for a complete walkthrough of the process.

If you are using a hook from someone else, make sure the repository actually supports usage with `pre-commit`: if the `.pre-commit-hooks.yaml` file does not exist in the top-level of the repository, they do not support it.

---

## <a name="invalidmanifesterror"></a>InvalidManifestError

If you see an error that looks like this, your `.pre-commit-hooks.yaml` file is malformed. This could mean that the file isn't proper YAML, has the wrong data types, or is missing required keys as shown here:

```shell[class="command-line"][data-prompt="$"][data-output="1-5"]
An error has occurred: InvalidManifestError:
==> File /var/folders/.../.pre-commit-hooks.yaml
==> At Hook(id='strip-exif')
=====> Missing required key: language
Check the log at /Users/stefanie/.cache/pre-commit/pre-commit.log
```

### The fix

Open up your `.pre-commit-hooks.yaml` file and address the issues mentioned in the error message (missing the `language` key here). You can run the following to check whether you fixed the issue:

```shell[class="command-line"][data-prompt="$"][data-output="2-5"]
pre-commit validate-manifest .pre-commit-hooks.yaml

==> File .pre-commit-hooks.yaml
==> At Hook(id='strip-exif')
=====> Missing required key: language
```

Note that, in addition to providing the missing required key (`language`), the error message includes the particular hook in `.pre-commit-hooks.yaml` where the error occurs (`strip-exif`).

---

Did you find this helpful or are you having an issue that isn't covered? Let me know in the comments below.
