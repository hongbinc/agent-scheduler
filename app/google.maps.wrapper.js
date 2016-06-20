System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var GoogleMapsWrapper;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GoogleMapsWrapper = (function () {
                function GoogleMapsWrapper() {
                    if (GoogleMapsWrapper.LoadAPI === null) {
                        GoogleMapsWrapper.LoadAPI = new Promise(function (tResolve) {
                            window['__onGoogleMapsLoaded'] = function (tEvent) {
                                tResolve(window['google'].maps);
                            };
                        });
                        this.LoadScript();
                    }
                }
                Object.defineProperty(GoogleMapsWrapper.prototype, "GoogleMapsAPI", {
                    get: function () {
                        return GoogleMapsWrapper.LoadAPI;
                    },
                    enumerable: true,
                    configurable: true
                });
                GoogleMapsWrapper.prototype.LoadScript = function () {
                    var vNode = document.createElement("script");
                    vNode.src = "//maps.googleapis.com/maps/api/js?callback=__onGoogleMapsLoaded";
                    vNode.type = "text/javascript";
                    document.getElementsByTagName("head")[0].appendChild(vNode);
                };
                GoogleMapsWrapper.LoadAPI = null;
                GoogleMapsWrapper = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GoogleMapsWrapper);
                return GoogleMapsWrapper;
            }());
            exports_1("GoogleMapsWrapper", GoogleMapsWrapper);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZS5tYXBzLndyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFPSTtvQkFDSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDckMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsUUFBUTs0QkFDN0MsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsVUFBQyxNQUFNO2dDQUNwQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNwQyxDQUFDLENBQUE7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QixDQUFDO2dCQUNMLENBQUM7Z0JBYkQsc0JBQUksNENBQWE7eUJBQWpCO3dCQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3JDLENBQUM7OzttQkFBQTtnQkFhRCxzQ0FBVSxHQUFWO29CQUNJLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdDLEtBQUssQ0FBQyxHQUFHLEdBQUcsaUVBQWlFLENBQUM7b0JBQzlFLEtBQUssQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7b0JBQy9CLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBdEJNLHlCQUFPLEdBQWlCLElBQUksQ0FBQztnQkFGeEM7b0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7Z0JBeUJiLHdCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCxpREF3QkMsQ0FBQSIsImZpbGUiOiJnb29nbGUubWFwcy53cmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1dyYXBwZXIge1xyXG4gICAgc3RhdGljIExvYWRBUEk6IFByb21pc2U8YW55PiA9IG51bGw7XHJcblxyXG4gICAgZ2V0IEdvb2dsZU1hcHNBUEkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gR29vZ2xlTWFwc1dyYXBwZXIuTG9hZEFQSTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKEdvb2dsZU1hcHNXcmFwcGVyLkxvYWRBUEkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgR29vZ2xlTWFwc1dyYXBwZXIuTG9hZEFQSSA9IG5ldyBQcm9taXNlKCh0UmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93WydfX29uR29vZ2xlTWFwc0xvYWRlZCddID0gKHRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRSZXNvbHZlKHdpbmRvd1snZ29vZ2xlJ10ubWFwcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLkxvYWRTY3JpcHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFNjcmlwdCgpIHtcclxuICAgICAgICBsZXQgdk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHZOb2RlLnNyYyA9IFwiLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2NhbGxiYWNrPV9fb25Hb29nbGVNYXBzTG9hZGVkXCI7XHJcbiAgICAgICAgdk5vZGUudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHZOb2RlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
