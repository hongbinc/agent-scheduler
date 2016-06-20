System.register(['@angular/platform-browser-dynamic', './LocalStorageEmitter', "./app.component", "./listings.service", './google.maps.wrapper'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, LocalStorageEmitter_1, app_component_1, listings_service_1, google_maps_wrapper_1;
    var appPromise;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (LocalStorageEmitter_1_1) {
                LocalStorageEmitter_1 = LocalStorageEmitter_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (listings_service_1_1) {
                listings_service_1 = listings_service_1_1;
            },
            function (google_maps_wrapper_1_1) {
                google_maps_wrapper_1 = google_maps_wrapper_1_1;
            }],
        execute: function() {
            appPromise = platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [LocalStorageEmitter_1.LocalStorageService, listings_service_1.ListingsService, google_maps_wrapper_1.GoogleMapsWrapper]);
            // register LocalStorage, this registers our change-detection.
            LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU9JLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBVixVQUFVLEdBQUcsb0NBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMseUNBQW1CLEVBQUUsa0NBQWUsRUFBRSx1Q0FBaUIsQ0FBQyxDQUFDLENBQUM7WUFFcEcsOERBQThEO1lBQzlELDRDQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU3Vic2NyaWJlcn0gZnJvbSAnLi9Mb2NhbFN0b3JhZ2VFbWl0dGVyJztcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMaXN0aW5nc1NlcnZpY2V9IGZyb20gXCIuL2xpc3RpbmdzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHb29nbGVNYXBzV3JhcHBlcn0gZnJvbSAnLi9nb29nbGUubWFwcy53cmFwcGVyJztcclxuXHJcbnZhciBhcHBQcm9taXNlID0gYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW0xvY2FsU3RvcmFnZVNlcnZpY2UsIExpc3RpbmdzU2VydmljZSwgR29vZ2xlTWFwc1dyYXBwZXJdKTtcclxuXHJcbi8vIHJlZ2lzdGVyIExvY2FsU3RvcmFnZSwgdGhpcyByZWdpc3RlcnMgb3VyIGNoYW5nZS1kZXRlY3Rpb24uXHJcbkxvY2FsU3RvcmFnZVN1YnNjcmliZXIoYXBwUHJvbWlzZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
