# Contributing to `network-viewer`

**Thank you for your interest in `network-viewer`. Your contributions are highly welcome.**

There are multiple ways of getting involved:

- [Project Setup](#project-setup)
- [Report a bug](#report-a-bug)
- [Suggest a feature](#suggest-a-feature)
- [Contribute code](#contribute-code)
- [Release package](#release-package)

Below are a few guidelines we would like you to follow.
If you need help, please reach out to us by opening an issue.

## Project Setup

To start working on the code please clone the project first:

```sh
$ git clone https://github.com/saucelabs/network-viewer.git
$ cd network-viewer
$ npm install
```

Before starting making any modification, run this development command that ensures that all files are compiled when modified:

```sh
$ npm start
```

#### Build library

To build the whole project, run:

```sh
$ npm run build:lib
```

#### Build examples

To build our [example application](https://opensource.saucelabs.com/network-viewer/), run:

```sh
$ npm run build:examples
```

## Report a bug
Reporting bugs is one of the best ways to contribute. Before creating a bug report, please check that an [issue](/issues) reporting the same problem does not already exist. If there is such an issue, you may add your information as a comment.

To report a new bug you should open an issue that summarizes the bug and set the label to "bug".

If you want to provide a fix along with your bug report: That is great! In this case please send us a pull request as described in section [Contribute Code](#contribute-code).

## Suggest a feature
To request a new feature you should open an [issue](../../issues/new) and summarize the desired functionality and its use case. Set the issue label to "feature".

## Contribute code
This is an outline of what the workflow for code contributions looks like

- Check the list of open [issues](../../issues). Either assign an existing issue to yourself, or
create a new one that you would like work on and discuss your ideas and use cases.

It is always best to discuss your plans beforehand, to ensure that your contribution is in line with our goals.

- Fork the repository on GitHub
- Create a topic branch from where you want to base your work. This is usually master.
- Open a new pull request, label it `work in progress` and outline what you will be contributing
- Make commits of logical units.
- Make sure you sign-off on your commits `git commit -s -m "adding X to change Y"`
- Write good commit messages (see below).
- Push your changes to a topic branch in your fork of the repository.
- As you push your changes, update the pull request with new infomation and tasks as you complete them
- Project maintainers might comment on your work as you progress
- When you are done, remove the `work in progess` label and ping the maintainers for a review
- Your pull request must receive a :thumbsup: from two [maintainers](MAINTAINERS)

Thanks for your contributions!

### Commit messages
Your commit messages ideally can answer two questions: what changed and why. The subject line should feature the “what” and the body of the commit should describe the “why”.

When creating a pull request, its description should reference the corresponding issue id.

### Sign your work / Developer certificate of origin
All contributions (including pull requests) must agree to the Developer Certificate of Origin (DCO) version 1.1. This is exactly the same one created and used by the Linux kernel developers and posted on http://developercertificate.org/. This is a developer's certification that he or she has the right to submit the patch for inclusion into the project. Simply submitting a contribution implies this agreement, however, please include a "Signed-off-by" tag in every patch (this tag is a conventional way to confirm that you agree to the DCO) - you can automate this with a [Git hook](https://stackoverflow.com/questions/15015894/git-add-signed-off-by-line-using-format-signoff-not-working)

```
git commit -s -m "adding X to change Y"
```

## Release Package

Ensure you have publish rights for the [NPM package](https://www.npmjs.com/package/network-viewer). You can release new version simply by running a manual action called `Manual NPM Publish`. Remember to set *releaseType* to one of `patch`, `minor` or `major`.

If you want to do it on your local machine (**less preferred way**), pull the latest commits from the `master` branch and run the release script:

```sh
$ npm run release # patch release
$ npm run release:minor # minor release
$ npm run release:major # major release
```

**Have fun, and happy hacking!**
