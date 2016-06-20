System.register(["./LocalStorageEmitter"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStorageEmitter_1;
    function LocalStorage(storageKey) {
        return WebStorage(storageKey, localStorage);
    }
    exports_1("LocalStorage", LocalStorage);
    function SessionStorage(storageKey) {
        return WebStorage(storageKey, sessionStorage);
    }
    exports_1("SessionStorage", SessionStorage);
    function WebStorage(storageKey, webStorage) {
        return function (target, decoratedPropertyName) {
            if (!webStorage) {
                return;
            }
            if (!storageKey) {
                storageKey = "" + "/" + decoratedPropertyName;
            }
            Object.defineProperty(target, "_" + decoratedPropertyName + "_mapped", {
                enumerable: false,
                configurable: true,
                writable: true,
                value: false
            });
            var instances = [];
            var values = {};
            var storageValue = webStorage.getItem(storageKey) || null;
            var storageValueJSON = storageValue;
            if ("string" === typeof storageValue) {
                try {
                    storageValue = JSON.parse(storageValue);
                }
                catch (e) {
                    storageValue = null;
                    storageValueJSON = "null";
                }
            }
            var oldJSONValues = {};
            Object.defineProperty(target, decoratedPropertyName, {
                get: function () {
                    if (false === this["_" + decoratedPropertyName + "_mapped"]) {
                        this["_" + decoratedPropertyName + "_mapped"] = instances.length;
                        // first registration triggers a setting to localStorage value
                        values[instances.length] = storageValue;
                        oldJSONValues[instances.length] = storageValueJSON;
                        instances.push(this);
                    }
                    return values[this["_" + decoratedPropertyName + "_mapped"]];
                },
                set: function (newValue) {
                    if (false === this["_" + decoratedPropertyName + "_mapped"]) {
                        this["_" + decoratedPropertyName + "_mapped"] = instances.length;
                        // first registration triggers a setting to localStorage value
                        values[instances.length] = storageValue;
                        oldJSONValues[instances.length] = storageValueJSON;
                        instances.push(this);
                        // first "set" call is ignored if we have already a value from the localStorage
                        if (storageValue) {
                            return;
                        }
                    }
                    values[this["_" + decoratedPropertyName + "_mapped"]] = newValue;
                },
                enumerable: true,
                configurable: true
            });
            LocalStorageEmitter_1.LocalStorageEmitter.subscribe(function () {
                for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                    var instance = instances_1[_i];
                    var currentValue = JSON.stringify(instance[decoratedPropertyName]);
                    var oldJSONValue = oldJSONValues[instance["_" + decoratedPropertyName + "_mapped"]];
                    if (currentValue !== oldJSONValue) {
                        oldJSONValues[instance["_" + decoratedPropertyName + "_mapped"]] = currentValue;
                        webStorage.setItem(storageKey, currentValue);
                    }
                }
            });
        };
    }
    return {
        setters:[
            function (LocalStorageEmitter_1_1) {
                LocalStorageEmitter_1 = LocalStorageEmitter_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFDLENBQUM7SUFDTixDQUFDIiwiZmlsZSI6IldlYlN0b3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvY2FsU3RvcmFnZUVtaXR0ZXJ9IGZyb20gXCIuL0xvY2FsU3RvcmFnZUVtaXR0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBJV2ViU3RvcmFnZSB7XHJcbiAgICBnZXRJdGVtOiAoa2V5OiBzdHJpbmcpID0+IHN0cmluZztcclxuICAgIHNldEl0ZW06IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZShzdG9yYWdlS2V5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gV2ViU3RvcmFnZShzdG9yYWdlS2V5LCBsb2NhbFN0b3JhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2Vzc2lvblN0b3JhZ2Uoc3RvcmFnZUtleT86IHN0cmluZykge1xyXG4gICAgcmV0dXJuIFdlYlN0b3JhZ2Uoc3RvcmFnZUtleSwgc2Vzc2lvblN0b3JhZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXZWJTdG9yYWdlKHN0b3JhZ2VLZXk6IHN0cmluZywgd2ViU3RvcmFnZTogSVdlYlN0b3JhZ2UpIHtcclxuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGRlY29yYXRlZFByb3BlcnR5TmFtZT86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghd2ViU3RvcmFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0b3JhZ2VLZXkpIHtcclxuICAgICAgICAgICAgc3RvcmFnZUtleSA9IFwiXCIgKyBcIi9cIiArIGRlY29yYXRlZFByb3BlcnR5TmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIFwiX1wiICsgZGVjb3JhdGVkUHJvcGVydHlOYW1lICsgXCJfbWFwcGVkXCIsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaW5zdGFuY2VzOiBhbnkgPSBbXTtcclxuICAgICAgICBsZXQgdmFsdWVzID0ge307XHJcblxyXG4gICAgICAgIGxldCBzdG9yYWdlVmFsdWUgPSB3ZWJTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgfHwgbnVsbDtcclxuICAgICAgICBsZXQgc3RvcmFnZVZhbHVlSlNPTiA9IHN0b3JhZ2VWYWx1ZTtcclxuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHN0b3JhZ2VWYWx1ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZVZhbHVlSlNPTiA9IFwibnVsbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvbGRKU09OVmFsdWVzID0ge307XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlY29yYXRlZFByb3BlcnR5TmFtZSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gdGhpc1tcIl9cIiArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArIFwiX21hcHBlZFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJfXCIgKyBkZWNvcmF0ZWRQcm9wZXJ0eU5hbWUgKyBcIl9tYXBwZWRcIl0gPSBpbnN0YW5jZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCByZWdpc3RyYXRpb24gdHJpZ2dlcnMgYSBzZXR0aW5nIHRvIGxvY2FsU3RvcmFnZSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnN0YW5jZXMubGVuZ3RoXSA9IHN0b3JhZ2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvbGRKU09OVmFsdWVzW2luc3RhbmNlcy5sZW5ndGhdID0gc3RvcmFnZVZhbHVlSlNPTjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzW3RoaXNbXCJfXCIgKyBkZWNvcmF0ZWRQcm9wZXJ0eU5hbWUgKyBcIl9tYXBwZWRcIl1dO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSB0aGlzW1wiX1wiICsgZGVjb3JhdGVkUHJvcGVydHlOYW1lICsgXCJfbWFwcGVkXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcIl9cIiArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArIFwiX21hcHBlZFwiXSA9IGluc3RhbmNlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IHJlZ2lzdHJhdGlvbiB0cmlnZ2VycyBhIHNldHRpbmcgdG8gbG9jYWxTdG9yYWdlIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2luc3RhbmNlcy5sZW5ndGhdID0gc3RvcmFnZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZEpTT05WYWx1ZXNbaW5zdGFuY2VzLmxlbmd0aF0gPSBzdG9yYWdlVmFsdWVKU09OO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBcInNldFwiIGNhbGwgaXMgaWdub3JlZCBpZiB3ZSBoYXZlIGFscmVhZHkgYSB2YWx1ZSBmcm9tIHRoZSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdGhpc1tcIl9cIiArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArIFwiX21hcHBlZFwiXV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5zdGFuY2Ugb2YgaW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gSlNPTi5zdHJpbmdpZnkoaW5zdGFuY2VbZGVjb3JhdGVkUHJvcGVydHlOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkSlNPTlZhbHVlID0gb2xkSlNPTlZhbHVlc1tpbnN0YW5jZVtcIl9cIiArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArIFwiX21hcHBlZFwiXV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSBvbGRKU09OVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRKU09OVmFsdWVzW2luc3RhbmNlW1wiX1wiICsgZGVjb3JhdGVkUHJvcGVydHlOYW1lICsgXCJfbWFwcGVkXCJdXSA9IGN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
