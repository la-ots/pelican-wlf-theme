# Pelican Themes Template

This repository is a template repository for creating pelican themes.

## Getting started

1. Create a new repository using this repository as the template.
1. Rename the file `css/custom-theme.css` to something more meaningful for your project, i.e. `{agency-abbreviation}-theme.css`
1. Update `src/assets/css-bundle.liquid`, replacing `custom-theme.css` with the new name for your theme file.

## Testing your theme

This template comes with a working eleventy site that can be used to test your theme changes.

__Install dependencies__

```shell
npm install
```

__Run the test site__

```shell
npm run develop
```
