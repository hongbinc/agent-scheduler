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
    var core_1, core_2;
    var LocalStorageEmitter, LocalStorageService;
    function LocalStorageSubscriber(appPromise) {
        appPromise.then(function (bla) {
            bla.injector.get(LocalStorageService);
        });
    }
    exports_1("LocalStorageSubscriber", LocalStorageSubscriber);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            LocalStorageEmitter = (function () {
                function LocalStorageEmitter() {
                }
                LocalStorageEmitter.register = function (ngZone) {
                    var index = LocalStorageEmitter.ngZones.indexOf(ngZone);
                    if (index === -1) {
                        index = LocalStorageEmitter.ngZones.push(ngZone) - 1;
                    }
                    LocalStorageEmitter.subscribed[index] = ngZone.onMicrotaskEmpty.subscribe(function () {
                        for (var _i = 0, _a = LocalStorageEmitter.subscribers; _i < _a.length; _i++) {
                            var callback = _a[_i];
                            callback();
                        }
                    });
                };
                LocalStorageEmitter.subscribe = function (callback) {
                    LocalStorageEmitter.subscribers.push(callback);
                };
                LocalStorageEmitter.unregister = function (ngZone) {
                    var index = LocalStorageEmitter.ngZones.indexOf(ngZone);
                    if (index >= 0) {
                        LocalStorageEmitter.subscribed[index].unsubscribe();
                    }
                };
                LocalStorageEmitter.subscribed = [];
                LocalStorageEmitter.ngZones = [];
                LocalStorageEmitter.subscribers = [];
                return LocalStorageEmitter;
            }());
            exports_1("LocalStorageEmitter", LocalStorageEmitter);
            LocalStorageService = (function () {
                function LocalStorageService(ngZone) {
                    this.ngZone = ngZone;
                    LocalStorageEmitter.register(this.ngZone);
                }
                LocalStorageService.prototype.ngOnDestroy = function () {
                    LocalStorageEmitter.unregister(this.ngZone);
                };
                LocalStorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_2.NgZone])
                ], LocalStorageService);
                return LocalStorageService;
            }());
            exports_1("LocalStorageService", LocalStorageService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvY2FsU3RvcmFnZUVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFpREEsZ0NBQXVDLFVBQXNDO1FBQ3pFLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ2hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFPLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBSkQsMkRBSUMsQ0FBQTs7Ozs7Ozs7WUFsREQ7Z0JBQUE7Z0JBNkJBLENBQUM7Z0JBeEJpQiw0QkFBUSxHQUF0QixVQUF1QixNQUFjO29CQUNqQyxJQUFJLEtBQUssR0FBVyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekQsQ0FBQztvQkFDRCxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzt3QkFDdEUsR0FBRyxDQUFDLENBQWlCLFVBQStCLEVBQS9CLEtBQUEsbUJBQW1CLENBQUMsV0FBVyxFQUEvQixjQUErQixFQUEvQixJQUErQixDQUFDOzRCQUFoRCxJQUFJLFFBQVEsU0FBQTs0QkFDYixRQUFRLEVBQUUsQ0FBQzt5QkFDZDtvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUlhLDZCQUFTLEdBQXZCLFVBQXdCLFFBQWtCO29CQUN0QyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVhLDhCQUFVLEdBQXhCLFVBQXlCLE1BQWM7b0JBQ25DLElBQUksS0FBSyxHQUFXLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNiLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDeEQsQ0FBQztnQkFDTCxDQUFDO2dCQTFCZ0IsOEJBQVUsR0FBUSxFQUFFLENBQUM7Z0JBQ3JCLDJCQUFPLEdBQWEsRUFBRSxDQUFDO2dCQWN2QiwrQkFBVyxHQUFRLEVBQUUsQ0FBQztnQkFZM0MsMEJBQUM7WUFBRCxDQTdCQSxBQTZCQyxJQUFBO1lBN0JELHFEQTZCQyxDQUFBO1lBR0Q7Z0JBQ0ksNkJBQW9CLE1BQWM7b0JBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDOUIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYO29CQUNJLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBUkw7b0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7Z0JBU2IsMEJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHFEQVFDLENBQUEiLCJmaWxlIjoiTG9jYWxTdG9yYWdlRW1pdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgT25EZXN0cm95fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VFbWl0dGVyIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHN1YnNjcmliZWQ6IGFueSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBuZ1pvbmVzOiBOZ1pvbmVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIobmdab25lOiBOZ1pvbmUpIHtcclxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IExvY2FsU3RvcmFnZUVtaXR0ZXIubmdab25lcy5pbmRleE9mKG5nWm9uZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IExvY2FsU3RvcmFnZUVtaXR0ZXIubmdab25lcy5wdXNoKG5nWm9uZSkgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2NhbFN0b3JhZ2VFbWl0dGVyLnN1YnNjcmliZWRbaW5kZXhdID0gbmdab25lLm9uTWljcm90YXNrRW1wdHkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2FsbGJhY2sgb2YgTG9jYWxTdG9yYWdlRW1pdHRlci5zdWJzY3JpYmVycykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgc3Vic2NyaWJlcnM6IGFueSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlKGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIuc3Vic2NyaWJlcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyKG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBMb2NhbFN0b3JhZ2VFbWl0dGVyLm5nWm9uZXMuaW5kZXhPZihuZ1pvbmUpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIuc3Vic2NyaWJlZFtpbmRleF0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIucmVnaXN0ZXIodGhpcy5uZ1pvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIudW5yZWdpc3Rlcih0aGlzLm5nWm9uZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltcG9ydCB7VHlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL2ZhY2FkZS9sYW5nXCI7XHJcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL2RpXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZVN1YnNjcmliZXIoYXBwUHJvbWlzZTogUHJvbWlzZTxDb21wb25lbnRSZWY8YW55Pj4pIHtcclxuICAgIGFwcFByb21pc2UudGhlbigoYmxhKSA9PiB7XHJcbiAgICAgICAgYmxhLmluamVjdG9yLmdldCg8VHlwZT5Mb2NhbFN0b3JhZ2VTZXJ2aWNlKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
