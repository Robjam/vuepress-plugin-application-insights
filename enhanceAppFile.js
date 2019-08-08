import { ApplicationInsights } from '@microsoft/applicationinsights-web'

export default (context) => {
    if (process.env.NODE_ENV === 'production' && !context.isServer) {
        if (!AppInsightsOptions.instrumentationKey) {
            console.log('vuepress-plugin-application-insights: Missing instrumentation key');
            return;
        }

        const appInsights = new ApplicationInsights({
            config: AppInsightsOptions
        });
        appInsights.loadAppInsights();

        context.router.beforeEach((to, from, next) => {
            try {
                appInsights.trackPageView();
            } catch (error) {
                console.debug('vuepress-plugin-application-insights:', error);
            }
            next();
        });
    }
}