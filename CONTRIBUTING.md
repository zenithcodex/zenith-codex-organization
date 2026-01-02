# Contributing to Zenith Codex

First off, thanks for taking the time to contribute! The Zenith Codex Collective welcomes all engineers who wish to architect the future.

The following is a set of guidelines for contributing to Zenith Codex Organization and its packages, which are hosted in the [Zenith Codex Organization](https://github.com/zenithcodex) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [Zenith Codex Code of Conduct](CODE_OF_CONDUCT.md) (To be added). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Zenith Codex. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples** to demonstrate the steps. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Zenith Codex, including completely new features and minor improvements to existing functionality.

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples** to demonstrate the steps.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.

### Pull Requests

The process described here has several goals:

- Maintain the quality of our code.
- Fix problems that are important to users.
- Engage the community in working toward the best possible Zenith Codex.

1.  **Fork the repo** and create your branch from `main`.
2.  **Ensure the test suite passes**.
3.  **Make sure your code lints** (`npm run lint`).
4.  **Format your code** with Prettier (`npm run format`).
5.  If you've added code that should be tested, add tests.
6.  Ensure the test suite passes.
7.  Issue a Pull Request.

## Styleguides

### Git Commit Messages

*   Use the present tense ("Add feature" not "Added feature")
*   Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
*   Limit the first line to 72 characters or less
*   Reference issues and pull requests liberally after the first line

### TypeScript Styleguide

*   Use `interface` for object definitions over `type` unless necessary (e.g. unions).
*   Avoid `any` at all costs. Use `unknown` if you must, but try to strictly type everything.
*   Use functional components for React.
*   Prioritize modularity. Keep components small and focused.

### Directory Structure

Please adhere to the existing folder structure within `src/`:
*   `app/`: Pages and Layouts (Next.js App Router).
*   `components/ui/`: Reusable, generic UI components (Shadcn UI).
*   `components/zenith/`: Specific, project-branded components.
*   `types/`: Shared TypeScript interfaces.
*   `data/`: Static data files.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

*   `bug` - Issues that come effectively from the user not triggering an error but the logic is wrong.
*   `enhancement` - New features or improvements to existing features.
*   `documentation` - Improvements or additions to documentation.
*   `good first issue` - Good for newcomers.

---

*Transmission End. Connection Terminated.*
