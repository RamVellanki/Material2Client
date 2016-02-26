System.register(['angular2/platform/browser', './demo-app/demo-app', 'angular2/router'], function(exports_1) {
    var browser_1, demo_app_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo_app_1_1) {
                demo_app_1 = demo_app_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(demo_app_1.DemoApp, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=../../main.js.map