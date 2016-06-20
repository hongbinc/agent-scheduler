System.register(['@angular/core', './google.maps.wrapper'], function(exports_1, context_1) {
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
    var core_1, google_maps_wrapper_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (google_maps_wrapper_1_1) {
                google_maps_wrapper_1 = google_maps_wrapper_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(mWrapper) {
                    this.mWrapper = mWrapper;
                    this.Map = null;
                }
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var self = this;
                    this.mWrapper.GoogleMapsAPI.then(function (tGoogleMaps) {
                        var vDiv = document.getElementById("map-container");
                        var vLat = _this.model.lat || 40.75;
                        var vLng = _this.model.lng || -74;
                        _this.Map = new tGoogleMaps.Map(vDiv, {
                            center: { lat: vLat, lng: vLng },
                            zoom: 14,
                            scrollwheel: true
                        });
                        // Add Markers Here 
                        for (var i = _this.listings.length - 1; i >= 0; i--) {
                            var currentListing = _this.listings[i];
                            var vGeocoder = new tGoogleMaps.Geocoder();
                            vGeocoder.geocode({ address: currentListing.address }, function (tResults, tStatus) {
                                if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
                                    var location = tResults[0].geometry.location;
                                    //console.log(tResults[0].formatted_address);
                                    var contentString = '<div id="content">' + tResults[0].formatted_address + '</div>';
                                    var infowindow = new tGoogleMaps.InfoWindow({
                                        content: contentString
                                    });
                                    var marker = new tGoogleMaps.Marker({
                                        position: { lat: location.lat(), lng: location.lng() },
                                        map: _this.Map,
                                        title: tResults[0].formatted_address
                                    });
                                    infowindow.open(_this.Map, marker);
                                }
                            });
                        }
                    });
                };
                MapComponent.prototype.ngOnChanges = function (tChanges) {
                    var _this = this;
                    this.mWrapper.GoogleMapsAPI.then(function (tGoogleMaps) {
                        _this.addMarker(tGoogleMaps, _this.model);
                    });
                };
                MapComponent.prototype.addMarker = function (tGoogleMaps, model) {
                    if (this.Map) {
                        if (this.Marker) {
                            this.Marker.setMap(null);
                            this.Marker = null;
                        }
                        this.Marker = new tGoogleMaps.Marker({
                            position: { lat: model.lat, lng: model.lng },
                            map: this.Map,
                            title: 'We can add data here...!'
                        });
                        this.Map.panTo(this.Marker.getPosition());
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "model", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "listings", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'my-map',
                        templateUrl: 'dev/map.component.html',
                    }), 
                    __metadata('design:paramtypes', [google_maps_wrapper_1.GoogleMapsWrapper])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxXQUFXLEVBQUUsS0FBSztvQkFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDcEIsQ0FBQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQzs0QkFDcEMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUU7NEJBQzVDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRzs0QkFDYixLQUFLLEVBQUUsMEJBQTBCO3lCQUNqQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUMzQyxDQUFDO2dCQUNGLENBQUM7Z0JBbkVEO29CQUFDLFlBQUssRUFBRTs7MkRBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs4REFBQTtnQkFQVDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsd0JBQXdCO3FCQUNyQyxDQUFDOztnQ0FBQTtnQkF1RUYsbUJBQUM7WUFBRCxDQXJFQSxBQXFFQyxJQUFBO1lBckVELHVDQXFFQyxDQUFBIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzV3JhcHBlciB9IGZyb20gJy4vZ29vZ2xlLm1hcHMud3JhcHBlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LW1hcCcsXHJcblx0dGVtcGxhdGVVcmw6ICdkZXYvbWFwLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIG1vZGVsO1xyXG5cdEBJbnB1dCgpIGxpc3RpbmdzO1xyXG5cclxuXHRNYXA6YW55ID0gbnVsbDtcclxuXHRNYXJrZXI6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBtV3JhcHBlcjogR29vZ2xlTWFwc1dyYXBwZXIpe31cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMubVdyYXBwZXIuR29vZ2xlTWFwc0FQSS50aGVuKHRHb29nbGVNYXBzID0+IHtcclxuXHRcdFx0bGV0IHZEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcC1jb250YWluZXJcIik7XHJcblx0XHRcdGxldCB2TGF0ID0gdGhpcy5tb2RlbC5sYXQgfHwgNDAuNzU7XHJcblx0XHRcdGxldCB2TG5nID0gdGhpcy5tb2RlbC5sbmcgfHwgLTc0O1xyXG5cdFx0XHR0aGlzLk1hcCA9IG5ldyB0R29vZ2xlTWFwcy5NYXAodkRpdiwge1xyXG5cdFx0XHRcdGNlbnRlcjogeyBsYXQ6IHZMYXQsIGxuZzogdkxuZyB9LFxyXG4gICAgICAgICAgICAgICAgem9vbTogMTQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEFkZCBNYXJrZXJzIEhlcmUgXHJcblx0XHRcdGZvciAodmFyIGkgPSB0aGlzLmxpc3RpbmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRMaXN0aW5nID0gdGhpcy5saXN0aW5nc1tpXTtcclxuXHRcdFx0XHRsZXQgdkdlb2NvZGVyID0gbmV3IHRHb29nbGVNYXBzLkdlb2NvZGVyKCk7XHJcblx0XHRcdFx0dkdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzOiBjdXJyZW50TGlzdGluZy5hZGRyZXNzIH0sXHJcblx0XHRcdFx0XHQodFJlc3VsdHMsIHRTdGF0dXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHRTdGF0dXMgPT09IHRHb29nbGVNYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSB0UmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codFJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRTdHJpbmcgPSAnPGRpdiBpZD1cImNvbnRlbnRcIj4nICsgdFJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3MgKyAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyB0R29vZ2xlTWFwcy5JbmZvV2luZG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgdEdvb2dsZU1hcHMuTWFya2VyKHtcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7IGxhdDogbG9jYXRpb24ubGF0KCksIGxuZzogbG9jYXRpb24ubG5nKCkgfSxcclxuXHRcdFx0XHRcdFx0XHRcdG1hcDogdGhpcy5NYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRSZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvd2luZG93Lm9wZW4odGhpcy5NYXAsIG1hcmtlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkNoYW5nZXModENoYW5nZXM6IHsgW3Byb3BuYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG5cdFx0dGhpcy5tV3JhcHBlci5Hb29nbGVNYXBzQVBJLnRoZW4odEdvb2dsZU1hcHMgPT4ge1xyXG5cdFx0XHR0aGlzLmFkZE1hcmtlcih0R29vZ2xlTWFwcywgdGhpcy5tb2RlbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFkZE1hcmtlcih0R29vZ2xlTWFwcywgbW9kZWwpIHtcclxuXHRcdGlmICh0aGlzLk1hcCkge1xyXG5cdFx0XHRpZiAodGhpcy5NYXJrZXIpIHtcclxuXHRcdFx0XHR0aGlzLk1hcmtlci5zZXRNYXAobnVsbCk7XHJcblx0XHRcdFx0dGhpcy5NYXJrZXIgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuTWFya2VyID0gbmV3IHRHb29nbGVNYXBzLk1hcmtlcih7XHJcblx0XHRcdFx0cG9zaXRpb246IHsgbGF0OiBtb2RlbC5sYXQsIGxuZzogbW9kZWwubG5nIH0sXHJcblx0XHRcdFx0bWFwOiB0aGlzLk1hcCxcclxuXHRcdFx0XHR0aXRsZTogJ1dlIGNhbiBhZGQgZGF0YSBoZXJlLi4uISdcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuTWFwLnBhblRvKHRoaXMuTWFya2VyLmdldFBvc2l0aW9uKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
