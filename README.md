# TACC Core Styles

The shared stylesheets for TACC WMA Workspace Portals & Websites

> __Notice__: Currently only [Core CMS] is using these stylesheets.


## Related Repositories

- [Camino], a Docker container-based deployment scheme
- [Core CMS], the base CMS code for TACC WMA CMS Websites
- [Core Portal], the base Portal code for TACC WMA CMS Websites
- [Core Portal Deployments], private repository that facilitates deployments of [Core Portal] images via [Camino] and Jenkins


## Local Development Setup

### Prequisites for Reviewing the Styles

* Nodejs 12.x (LTS)

The Core Styles can be previewed using a Pattern Library powered by Node.

### Code Configuration

Code configuration happens in repos that use these styles.

### Previewing the Styles

1. [Install][yarn-install] the dependencies:

    ```bash
    yarn install
    ```

2. Build stylesheets + Run the pattern library:

    ```bash
    npm start
    ```

3. Open the web interface.

    The build command will output the URL (and may even open it for you).


[yarn-install]: https://classic.yarnpkg.com/en/docs/cli/install/


### Source Files

If you changes files in any `source/` directory, you may need to follow some of these steps.

#### Quick Start

1. _(optional)_ Make changes to `/source` files.
2. Build and preview the styles: `npm start`
3. _(to debug)_ Review respective `/dist` files' content.

#### How to Just Build Stylesheets

You can build stylesheets __from__ source files __in__ `source` directory __to__ compiled files __in__ `dist` directory.

1. Build stylesheets:

    ```bash
    npm run build
    ```


## Testing

Plugin testing is done manually. Run `npm run build` from root folder in this project, then review output in `/dist/_tests.css`, to ensure plugins are working correctly.

Style testing is done manually. Run `npm start` from root folder in this project, then review output at web interface, to ensure styles are rendering correctly.

### Production Deployment

The Core Styles are not deployed alone _yet_. ¹

_For now_, the stylesheets are acquired or accessed by other repositories.

| Repo | Usage |
| - | - |
| __[Core CMS]__ | [via CLI installed on test branch](https://github.com/TACC/Core-CMS/compare/test/core-styles) |
| __[Core CMS Pattern Library]__ | not accessing styles [_yet_][research-pattern-lib] ¹ |

<sub>¹ A repo that is, or will be, in [Core CMS Pattern Library] should load these styles __and__ build a pattern library.</sub>

[Core CMS Pattern Library]: https://github.com/tacc-wbomar?tab=repositories&q=Core-CMS-Pattern-Library
[research-pattern-lib]: https://confluence.tacc.utexas.edu/x/FADMBQ


## Contributing

### Development Workflow

We use a modifed version of [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) as our development workflow. Our [development site](https://dev.cep.tacc.utexas.edu) (accessible behind the TACC Network) is always up-to-date with `main`, while the [production site](https://prod.cep.tacc.utexas.edu) is built to a hashed commit tag.
- Feature branches contain major updates, bug fixes, and hot fixes with respective branch prefixes:
    - `task/` for features and updates
    - `bug/` for bugfixes
    - `fix/` for hotfixes

### Best Practices

Sign your commits ([see this link](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification) for help)

### Resources

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)


<!-- Link Aliases -->

[Core Portal Deployments]: https://github.com/TACC/Core-Portal-Deployments
[Camino]: https://github.com/TACC/Camino
[Core CMS]: https://github.com/TACC/Core-CMS
[Core Portal]: https://github.com/TACC/Core-Portal
