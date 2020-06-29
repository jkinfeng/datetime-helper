1.0.0 / 2020-06-17
==================

- fix `$options`. when only a single parameter is entered, the parameter will be wrong
- fix `$options.regular`. default value: /router.js$/ change to /\\.router.js$/
- add warning prompt for non route files when routes are autoload.
    - Example warning prompt: `this is not a valid router file of: ...path.../x.router.js`
