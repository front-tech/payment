const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        // The name of the organization this application is written for
        orgName: 'payment',

        // The name of the current project. This usually matches the git repo's name
        projectName: 'payment',

        // optional
        // This changes whether package names that start with @your-org-name are
        // treated as webpack externals or not. Defaults to true
        orgPackagesAsExternal: true,

        // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv
        webpackConfigEnv,

        // The CLI commands in the package.json script that triggered this build
        argv,

        // optional, defaults to 1
        // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop
        rootDirectoryLevel: 1,

        // optional, defaults to false.
        // When true, this removes html-webpack-plugin and standalone-single-spa-webpack-plugin
        disableHtmlGeneration: false
    })

    return webpackMerge.smart(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
    })
}