# danpaquette.github.io

[![Build Status](https://travis-ci.org/danpaquette/danpaquette.github.io.svg?branch=dev)](https://travis-ci.org/danpaquette/danpaquette.github.io)
[![Dependencies](https://david-dm.org/danpaquette/danpaquette.github.io/dev.svg)](https://david-dm.org/danpaquette/danpaquette.github.io/dev/)
[![Development Dependencies](https://david-dm.org/danpaquette/danpaquette.github.io/dev/dev-status.svg)](https://david-dm.org/danpaquette/danpaquette.github.io/dev/#info=devDependencies)

Public portfolio for Dan Paquette.

## Preparing the Environment

- **Install Node.js**: [Follow the instructions here](https://nodejs.org/en/download/) to install Node.js on your particular operating system.

- **Install Ruby**: [Follow the instructions here](https://www.ruby-lang.org/en/documentation/installation/) to install Ruby on your particular operating system.

- **Install Grunt**: Run `npm install -g grunt-cli`, or [follow the instructions](http://gruntjs.com/getting-started) here to install the Grunt CLI

- **Install Bower**: Run `npm install -g bower`, or [follow the instructions here](http://bower.io/#install-bower) to install Bower.

- **Install Sass**: Run `gem install sass`, or [follow the instructions here](http://sass-lang.com/install) to install Sass.

- **Install SCSS Lint**: Run `gem install scss_lint`, or [follow the instructions here](https://github.com/brigade/scss-lint) to install SCSS Lint.

- **Install Jekyll**: Run `gem install jekyll`, or [follow the instructions here](http://jekyllrb.com/docs/quickstart/) to install Jekyll

**Warning for Windows Users**: You may have to restart after each installation step so that the PATH variable is properly updated.

## Building for Local Testing and Production

####Building for Local Testing

Running `grunt local-test` will output a completed, Jekyll-compiled website in the `/.test` directory.

Running `start-connect` will open a Connect server on at `http://localhost:8080/` with the `/.test` directory allowing you to test locally.

Running `build-css` or `build-js` will build the CSS and Javascript respectively.

####Building for Production

Run `grunt` to run the default Grunt task and build the production `/dist` directory. Production, in this case, is a Jekyll-ready configuration for deployment on Github pages. Github will then manage the final conversion into a fully navigable website.

## Code Style

#### HTML

[Code Guide](http://codeguide.co/#html)

- Self closing tags must use a trailing forward slash (e.g. `<img src="#" />`.
- Tags that do not require a closing tag (e.g. `<li>`) should always be closed with their corresponding closing tag (e.g. `<li></li>`)
- Use https for all hosted third party inclusions. We don't use protocol-relative URLs for practical and security reasons. [See Paul Irish's Update](http://www.paulirish.com/2010/the-protocol-relative-url/)
- Use [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) where necessary.

#### CSS

[Code Guide](http://codeguide.co/#css)

- When feasible, default color palettes should comply with [WCAG color contrast guidelines](http://www.w3.org/TR/WCAG20/#visual-audio-contrast).
- Always include alternative styles for `:focus` styles (via e.g. `outline: none;`) See [this A11Y Project post](http://a11yproject.com/posts/never-remove-css-outlines/) for more details.
