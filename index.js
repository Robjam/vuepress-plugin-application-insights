const { path } = require('@vuepress/shared-utils');

module.exports = (options, context) => ({
    define(){
        var AppInsightsOptions = options;
        return AppInsightsOptions;
    },
    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
});