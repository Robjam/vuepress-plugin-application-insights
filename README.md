# VuePress plugin Application Insights

A small wrapper to integrate Application Insights with VuePress. 

## Current Features:

In addition to [Autocollection](https://github.com/microsoft/ApplicationInsights-JS#setting-up-autocollection) pageviews are tracked.

## Getting Started:

Add the plugin
```
// with yarn
yarn add vuepress-plugin-application-insights

// with npm
npm -i vuepress-plugin-application-insights
```

Add the plugin to `config.js`

```
// config.js
module.exports = {
    // ...
    plugins: [
        ['vuepress-plugin-application-insights', {
            AppInsightsOptions:{
                instrumentationKey: process.env.APP_INSIGHTS_INSTRUMENTATION_KEY, // the Instumentation key is REQUIRED
                // more configuration settings can be found here: https://github.com/microsoft/ApplicationInsights-JS#configuration
            }
        }],
    ]
}
```

## Contributing

PRs welcome!
