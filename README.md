# TACC Core Styles

The shared stylesheets for TACC WMA Workspace Portals & Websites

> __Warning__: No repository uses these styles yet. The process to do so has not been designed.


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

Plugin testing is done manually. Run `npm run build` from root folder in this project, then review output in `/dist/_test.css`, to ensure plugins are working correctly.

Style testing is done manually. Run `npm start` from root folder in this project, then review output at web interface, to ensure styles are rendering correctly.

### Production Deployment

The Core Styles built stylesheets are acquired or accessed by other repositories.

> __Warning__: No repository uses these styles yet. The process to do so has not been designed.


## Deployment Steps

1. Build and publish portal image with [Jenkins](https://jenkins01.tacc.utexas.edu/view/WMA%20CEP/job/Core_CMS/)
2. Update deployment settings, particularly the `CMS_TAG` environment variable in [Core Portal Deployments](https://github.com/TACC/Core-Portal-Deployments) with new tag name
3. Deploy new image with [Jenkins](https://jenkins01.tacc.utexas.edu/view/WMA%20CEP/job/Core_Portal_Deploy/)


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
