System.register(['@angular/core', "./WebStorage"], function(exports_1, context_1) {
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
    var core_1, WebStorage_1;
    var ListingsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WebStorage_1_1) {
                WebStorage_1 = WebStorage_1_1;
            }],
        execute: function() {
            ListingsService = (function () {
                function ListingsService() {
                    this.allListings = [];
                }
                ListingsService.prototype.addListing = function (d) {
                    this.allListings.push(d);
                };
                ;
                ListingsService.prototype.removeListing = function (d) {
                    for (var i = this.allListings.length - 1; i >= 0; i--) {
                        if (d.id == this.allListings[i].id) {
                            return this.allListings.splice(i, 1);
                        }
                    }
                };
                ;
                ListingsService.prototype.getAllListing = function () {
                    return this.allListings;
                };
                __decorate([
                    WebStorage_1.LocalStorage(), 
                    __metadata('design:type', Object)
                ], ListingsService.prototype, "allListings", void 0);
                ListingsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ListingsService);
                return ListingsService;
            }());
            exports_1("ListingsService", ListingsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtvQkFHQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztnQkFpQmxCLENBQUM7Z0JBZkEsb0NBQVUsR0FBVixVQUFXLENBQWU7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDOztnQkFFRCx1Q0FBYSxHQUFiLFVBQWMsQ0FBZTtvQkFDNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLENBQUM7b0JBQ0YsQ0FBQztnQkFDRixDQUFDOztnQkFFRCx1Q0FBYSxHQUFiO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUN6QixDQUFDO2dCQWpCRDtvQkFBQyx5QkFBWSxFQUFFOztvRUFBQTtnQkFIaEI7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBcUJiLHNCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCw2Q0FvQkMsQ0FBQSIsImZpbGUiOiJsaXN0aW5ncy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtMaXN0aW5nTW9kZWx9IGZyb20gJy4vbGlzdGluZy5tb2RlbCc7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlLCBTZXNzaW9uU3RvcmFnZX0gZnJvbSBcIi4vV2ViU3RvcmFnZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdGluZ3NTZXJ2aWNlIHtcclxuXHJcblx0QExvY2FsU3RvcmFnZSgpXHJcblx0YWxsTGlzdGluZ3MgPSBbXTtcclxuXHJcblx0YWRkTGlzdGluZyhkOiBMaXN0aW5nTW9kZWwpIHtcclxuXHRcdHRoaXMuYWxsTGlzdGluZ3MucHVzaChkKTtcclxuXHR9O1xyXG5cclxuXHRyZW1vdmVMaXN0aW5nKGQ6IExpc3RpbmdNb2RlbCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuYWxsTGlzdGluZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aWYgKGQuaWQgPT0gdGhpcy5hbGxMaXN0aW5nc1tpXS5pZCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmFsbExpc3RpbmdzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldEFsbExpc3RpbmcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hbGxMaXN0aW5ncztcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
