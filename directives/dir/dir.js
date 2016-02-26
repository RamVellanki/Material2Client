System.register(['angular2/src/facade/async', 'angular2/core', "../../core/annotations/one-of"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var async_1, core_1, one_of_1;
    var Dir;
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (one_of_1_1) {
                one_of_1 = one_of_1_1;
            }],
        execute: function() {
            /**
             * Directive to listen to changes of direction of part of the DOM.
             *
             * Applications should use this directive instead of the native attribute so that Material
             * components can listen on changes of direction.
             */
            Dir = (function () {
                function Dir() {
                    this.dir_ = 'ltr';
                    this.dirChange = new async_1.EventEmitter();
                }
                Object.defineProperty(Dir.prototype, "dir", {
                    get: function () {
                        return this.dir_;
                    },
                    set: function (v) {
                        var old = this.dir_;
                        this.dir_ = v;
                        if (old != this.dir_) {
                            this.dirChange.emit(null);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dir.prototype, "value", {
                    get: function () { return this.dir; },
                    set: function (v) { this.dir = v; },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input('dir'),
                    one_of_1.OneOf(['ltr', 'rtl']), 
                    __metadata('design:type', String)
                ], Dir.prototype, "dir_", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Dir.prototype, "dirChange", void 0);
                __decorate([
                    core_1.HostBinding('attr.dir'), 
                    __metadata('design:type', String)
                ], Dir.prototype, "dir", null);
                Dir = __decorate([
                    core_1.Directive({
                        selector: '[dir]',
                        // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
                        exportAs: '$implicit'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dir);
                return Dir;
            })();
            exports_1("Dir", Dir);
        }
    }
});
//# sourceMappingURL=dir.js.map