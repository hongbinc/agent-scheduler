System.register(['@angular/core', './listings.service', './google.maps.wrapper'], function(exports_1, context_1) {
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
    var core_1, listings_service_1, google_maps_wrapper_1;
    var Listings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (listings_service_1_1) {
                listings_service_1 = listings_service_1_1;
            },
            function (google_maps_wrapper_1_1) {
                google_maps_wrapper_1 = google_maps_wrapper_1_1;
            }],
        execute: function() {
            Listings = (function () {
                function Listings(mListingsService, mGoogleMapsWrapper) {
                    this.mListingsService = mListingsService;
                    this.mGoogleMapsWrapper = mGoogleMapsWrapper;
                    this.modelForMap = new core_1.EventEmitter();
                }
                Listings.prototype.removeListing = function (obj) {
                    this.mListingsService.removeListing(obj);
                };
                Listings.prototype.showListingInMap = function (obj) {
                    var self = this;
                    this.mGoogleMapsWrapper.GoogleMapsAPI.then(function (tGoogleMaps) {
                        var vGeocoder = new tGoogleMaps.Geocoder();
                        vGeocoder.geocode({ address: obj.address }, function (tResults, tStatus) {
                            if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
                                var location = tResults[0].geometry.location;
                                self.modelForMap.emit({
                                    value: {
                                        lat: location.lat(),
                                        lng: location.lng()
                                    }
                                });
                            }
                        });
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Listings.prototype, "listings", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Listings.prototype, "modelForMap", void 0);
                Listings = __decorate([
                    core_1.Component({
                        selector: 'my-listing',
                        templateUrl: "/dev/listings.component.html",
                    }), 
                    __metadata('design:paramtypes', [listings_service_1.ListingsService, google_maps_wrapper_1.GoogleMapsWrapper])
                ], Listings);
                return Listings;
            }());
            exports_1("Listings", Listings);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUlDLGtCQUFvQixnQkFBaUMsRUFBVSxrQkFBcUM7b0JBQWhGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFGbkYsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFFc0QsQ0FBQztnQkFFekcsZ0NBQWEsR0FBYixVQUFjLEdBQUc7b0JBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLEdBQWlCO29CQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRWhCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsV0FBVzt3QkFDckQsSUFBSSxTQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQzNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUN6QyxVQUFDLFFBQVEsRUFBRSxPQUFPOzRCQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUMvQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQ0FDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0NBQ3JCLEtBQUssRUFBRTt3Q0FDTixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRTt3Q0FDbkIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUU7cUNBQ25CO2lDQUNELENBQUMsQ0FBQzs0QkFDSixDQUFDO3dCQUNGLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBM0JEO29CQUFDLFlBQUssRUFBRTs7MERBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOzs2REFBQTtnQkFQVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUsOEJBQThCO3FCQUMzQyxDQUFDOzs0QkFBQTtnQkErQkYsZUFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsK0JBNkJDLENBQUEiLCJmaWxlIjoibGlzdGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TGlzdGluZ01vZGVsfSBmcm9tICcuL2xpc3RpbmcubW9kZWwnO1xyXG5pbXBvcnQge0xpc3RpbmdzU2VydmljZX0gZnJvbSAnLi9saXN0aW5ncy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwc1dyYXBwZXIgfSBmcm9tICcuL2dvb2dsZS5tYXBzLndyYXBwZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktbGlzdGluZycsXHJcblx0dGVtcGxhdGVVcmw6IFwiL2Rldi9saXN0aW5ncy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RpbmdzIHtcclxuXHRASW5wdXQoKSBsaXN0aW5ncztcclxuXHRAT3V0cHV0KCkgcHVibGljIG1vZGVsRm9yTWFwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1MaXN0aW5nc1NlcnZpY2U6IExpc3RpbmdzU2VydmljZSwgcHJpdmF0ZSBtR29vZ2xlTWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNXcmFwcGVyKSB7IH1cclxuXHJcblx0cmVtb3ZlTGlzdGluZyhvYmopIHtcclxuXHRcdHRoaXMubUxpc3RpbmdzU2VydmljZS5yZW1vdmVMaXN0aW5nKG9iaik7XHJcblx0fVxyXG5cclxuXHRzaG93TGlzdGluZ0luTWFwKG9iajogTGlzdGluZ01vZGVsKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdHRoaXMubUdvb2dsZU1hcHNXcmFwcGVyLkdvb2dsZU1hcHNBUEkudGhlbih0R29vZ2xlTWFwcyA9PiB7XHJcblx0XHRcdGxldCB2R2VvY29kZXIgPSBuZXcgdEdvb2dsZU1hcHMuR2VvY29kZXIoKTtcclxuXHRcdFx0dkdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzOiBvYmouYWRkcmVzcyB9LFxyXG5cdFx0XHRcdCh0UmVzdWx0cywgdFN0YXR1cykgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRTdGF0dXMgPT09IHRHb29nbGVNYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsb2NhdGlvbiA9IHRSZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uO1xyXG5cdFx0XHRcdFx0XHRzZWxmLm1vZGVsRm9yTWFwLmVtaXQoe1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRsYXQ6IGxvY2F0aW9uLmxhdCgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0bG5nOiBsb2NhdGlvbi5sbmcoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
