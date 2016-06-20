System.register(['@angular/core', "./WebStorage", './listing.model', './listings.component', './map.component', './google.maps.wrapper', './listings.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, WebStorage_1, listing_model_1, listings_component_1, map_component_1, google_maps_wrapper_1, listings_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WebStorage_1_1) {
                WebStorage_1 = WebStorage_1_1;
            },
            function (listing_model_1_1) {
                listing_model_1 = listing_model_1_1;
            },
            function (listings_component_1_1) {
                listings_component_1 = listings_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (google_maps_wrapper_1_1) {
                google_maps_wrapper_1 = google_maps_wrapper_1_1;
            },
            function (listings_service_1_1) {
                listings_service_1 = listings_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(mListingsService, mWrapper) {
                    this.mListingsService = mListingsService;
                    this.mWrapper = mWrapper;
                    this.newListing = new core_1.EventEmitter();
                    this.isNameEditable = true;
                    this.listings = [];
                    this.currentListing = {
                        lat: 40.71,
                        lng: -74
                    };
                    this.agentName = 'Vintesh';
                    this.listings = mListingsService.getAllListing();
                }
                AppComponent.prototype.addListing = function (name, address) {
                    this.mListingsService.addListing(new listing_model_1.ListingModel(name.value, address.value));
                    var addressForPinning = address.value;
                    name.value = "";
                    address.value = "";
                    // Update theh Current Listing to add Marker - 
                    var self = this;
                    this.mWrapper.GoogleMapsAPI.then(function (tGoogleMaps) {
                        var vGeocoder = new tGoogleMaps.Geocoder();
                        vGeocoder.geocode({ address: addressForPinning }, function (tResults, tStatus) {
                            if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
                                var location = tResults[0].geometry.location;
                                self.currentListing.lat = location.lat();
                                self.currentListing.lng = location.lng();
                            }
                        });
                    });
                };
                AppComponent.prototype.isEditable = function () {
                    return this.isNameEditable;
                };
                AppComponent.prototype.changeMapValues = function ($event) {
                    this.currentListing = $event.value;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "newListing", void 0);
                __decorate([
                    WebStorage_1.LocalStorage('agentName'), 
                    __metadata('design:type', String)
                ], AppComponent.prototype, "agentName", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [listings_component_1.Listings, map_component_1.MapComponent],
                        templateUrl: "/dev/app.component.html",
                    }), 
                    __metadata('design:paramtypes', [listings_service_1.ListingsService, google_maps_wrapper_1.GoogleMapsWrapper])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFVQyxzQkFBb0IsZ0JBQWlDLEVBQVUsUUFBMkI7b0JBQXRFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7b0JBVGhGLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFFMUMsbUJBQWMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ2QsbUJBQWMsR0FBRzt3QkFDaEIsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsR0FBRyxFQUFFLENBQUMsRUFBRTtxQkFDUixDQUFDO29CQU9GLGNBQVMsR0FBVyxTQUFTLENBQUM7b0JBSjdCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2xELENBQUM7Z0JBS0QsaUNBQVUsR0FBVixVQUFXLElBQUksRUFBRSxPQUFPO29CQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksNEJBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNoQixPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFFbkIsK0NBQStDO29CQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7d0JBQzNDLElBQUksU0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUMzQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLEVBQy9DLFVBQUMsUUFBUSxFQUFFLE9BQU87NEJBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQy9DLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dDQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQTs0QkFDekMsQ0FBQzt3QkFDRixDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELGlDQUFVLEdBQVY7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsc0NBQWUsR0FBZixVQUFnQixNQUFNO29CQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3BDLENBQUM7Z0JBM0NEO29CQUFDLGFBQU0sRUFBRTs7Z0VBQUE7Z0JBYVQ7b0JBQUMseUJBQVksQ0FBQyxXQUFXLENBQUM7OytEQUFBO2dCQXBCM0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsNkJBQVEsRUFBRSw0QkFBWSxDQUFDO3dCQUNwQyxXQUFXLEVBQUUseUJBQXlCO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkErQ0YsbUJBQUM7WUFBRCxDQTdDQSxBQTZDQyxJQUFBO1lBN0NELHVDQTZDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZSwgU2Vzc2lvblN0b3JhZ2V9IGZyb20gXCIuL1dlYlN0b3JhZ2VcIjtcclxuaW1wb3J0IHtMaXN0aW5nTW9kZWx9IGZyb20gJy4vbGlzdGluZy5tb2RlbCc7XHJcbmltcG9ydCB7TGlzdGluZ3N9IGZyb20gJy4vbGlzdGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNXcmFwcGVyIH0gZnJvbSAnLi9nb29nbGUubWFwcy53cmFwcGVyJztcclxuaW1wb3J0IHtMaXN0aW5nc1NlcnZpY2V9IGZyb20gJy4vbGlzdGluZ3Muc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtMaXN0aW5ncywgTWFwQ29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi9kZXYvYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHRAT3V0cHV0KCkgbmV3TGlzdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0aXNOYW1lRWRpdGFibGUgPSB0cnVlO1xyXG5cdGxpc3RpbmdzID0gW107XHJcblx0Y3VycmVudExpc3RpbmcgPSB7XHJcblx0XHRsYXQ6IDQwLjcxLFxyXG5cdFx0bG5nOiAtNzRcclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1MaXN0aW5nc1NlcnZpY2U6IExpc3RpbmdzU2VydmljZSwgcHJpdmF0ZSBtV3JhcHBlcjogR29vZ2xlTWFwc1dyYXBwZXIpIHsgXHJcblx0XHR0aGlzLmxpc3RpbmdzID0gbUxpc3RpbmdzU2VydmljZS5nZXRBbGxMaXN0aW5nKCk7XHJcblx0fVxyXG5cclxuXHRATG9jYWxTdG9yYWdlKCdhZ2VudE5hbWUnKSBcclxuXHRhZ2VudE5hbWU6IHN0cmluZyA9ICdWaW50ZXNoJztcclxuXHJcblx0YWRkTGlzdGluZyhuYW1lLCBhZGRyZXNzKSB7XHJcblx0XHR0aGlzLm1MaXN0aW5nc1NlcnZpY2UuYWRkTGlzdGluZyhuZXcgTGlzdGluZ01vZGVsKG5hbWUudmFsdWUsIGFkZHJlc3MudmFsdWUpKTtcclxuXHRcdHZhciBhZGRyZXNzRm9yUGlubmluZyA9IGFkZHJlc3MudmFsdWU7XHJcblx0XHRuYW1lLnZhbHVlID0gXCJcIjtcclxuXHRcdGFkZHJlc3MudmFsdWUgPSBcIlwiO1xyXG5cclxuXHRcdC8vIFVwZGF0ZSB0aGVoIEN1cnJlbnQgTGlzdGluZyB0byBhZGQgTWFya2VyIC0gXHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLm1XcmFwcGVyLkdvb2dsZU1hcHNBUEkudGhlbih0R29vZ2xlTWFwcyA9PiB7XHJcblx0XHRcdGxldCB2R2VvY29kZXIgPSBuZXcgdEdvb2dsZU1hcHMuR2VvY29kZXIoKTtcclxuXHRcdFx0dkdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzOiBhZGRyZXNzRm9yUGlubmluZyB9LFxyXG5cdFx0XHRcdCh0UmVzdWx0cywgdFN0YXR1cykgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRTdGF0dXMgPT09IHRHb29nbGVNYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsb2NhdGlvbiA9IHRSZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmN1cnJlbnRMaXN0aW5nLmxhdCA9IGxvY2F0aW9uLmxhdCgpO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmN1cnJlbnRMaXN0aW5nLmxuZyA9IGxvY2F0aW9uLmxuZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlzRWRpdGFibGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pc05hbWVFZGl0YWJsZTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZU1hcFZhbHVlcygkZXZlbnQpIHtcclxuXHRcdHRoaXMuY3VycmVudExpc3RpbmcgPSAkZXZlbnQudmFsdWU7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
