# TACC Core Styles

The shared stylesheets for TACC WMA Workspace Portals & Websites

> __Notice__: Currently only [Core CMS] is using these styles.


## Related Repositories

- [Core CMS], the base CMS code for TACC WMA CMS Websites


## External Project Usage

### Quick Start

#### CLI

```bash
Usage: cli [options]

Options:
  -i, --input-dir <path>                parse CSS files from which directory
  -o, --output-dir <path>               output CSS files to which directory
  -e, --file-ext <ext>                  extension of CSS files to parse (default: "css") (default: "css")
  -v, --version                         print the version of this software
  --verbose                             print more information from build log
  -c, --custom-config-files <paths...>  overwrite base config with values from YAML files¹² (advanced)
  -h, --help                            display help for command

Note:
    The dir structure within '--input-dir' will be mirrored in '--output-dir'.

Footnotes:
    ¹ The file formats are like '.postcssrc.yml' from https://github.com/postcss/postcss-load-config#postcssrc.
    ² The first file is merged on top of the base config.
      Each successive file overwrites the file before it.
```

#### Module

```js
const coreStyles = require('core-styles');

coreStyles(
  // Parse CSS files from which directory (required)
  `path/to/your/css/src`,
  // Output CSS files to which directory (required)
  `path/to/put/css/output`, {
    // List of YAML config files (optional)
    // (The first file is merged on top of the base config.)
    // (Each successive file overwrites the file before it.)
    // SEE: https://github.com/postcss/postcss-load-config#postcssrc
    customConfigFiles: [
      // The "base" config is `/.postcssrc.base.yml`
      `path/to/custom/configthat/extends/base/.postcssrc.yml`,
      `path/to/custom/config/that/extends/above/.postcssrc.yml`
    ],
    // Print more info from build log (optional, default: false)
    verbose: true,
    // Print version of this software (optional, default: false)
    version: true,
    // Extension of CSS files to parse (optional, default: "css")
    fileExt: 'css'
  }
);
```


## Local Development Setup

### Prequisites for Building the Styles

* Nodejs 12.x (LTS)

> __Future__: The Core Styles will be previewable using a pattern library software.

### Code Configuration

Code configuration happens in repos that use these styles.

### Previewing the Styles

1. [Install][yarn-install] the dependencies:

    ```bash
    yarn # a.k.a. yarn install
    ```

> __Future__:
>
> 2. Build stylesheets + Run the pattern library:
> 
>     ```bash
>     npm start
>     ```
> 
> 3. Open the web interface.
> 
>     The build command will output the URL (and may even open it for you).


[yarn-install]: https://classic.yarnpkg.com/en/docs/cli/install/

### Source Files

If you changes files in a `source/` directory, you may need to follow some of these steps.

#### Quick Start

1. _(optional)_ Make changes to `/source` files.
2. Build the styles: `yarn build`

    > __Future__: 2. Build and preview the styles: `yarn start`

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
