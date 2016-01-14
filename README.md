# Cycle Admin Portal

Cycle's administrative employee portal.

## Getting Started

Install Nodejs, the Grunt CLI, and Bower on your computer. [Follow the detailed instructions here](http://gruntjs.com/getting-started) to get Node.js and the grunt-cli working.

For CSS Linting, please [follow the instructions here](https://github.com/brigade/scss-lint) to install scss-lint.

* Run `npm install` in the project root.
* Run `bower install` in the project root.
* Once the installation has completed, run `build-css` and `build-javascript` grunt tasks to precompile and build files.

## States

Active/Inactive = Current active item
Revealed/Hidden = Items that are revealed/hidden
Collapsed/Expanded = Items that are collapsed/expanded

## Resources Differences

The primary differences between 'cycle-portal', and the 'cycle-admin-portal' are the regular module views in 'templates' and the views/styles in 'templates/global' and 'scss/global'.

All other components/styles/dependencies, are identical and should remain identical between both repositories.
