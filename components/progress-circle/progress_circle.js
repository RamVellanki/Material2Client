System.register(['angular2/core', 'angular2/src/facade/lang', '../../core/annotations/one-of'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lang_1, one_of_1;
    var ProgressMode, MdProgressCircle, MdSpinner;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (one_of_1_1) {
                one_of_1 = one_of_1_1;
            }],
        execute: function() {
            // TODO(josephperrott): Benchpress tests.
            /** Display modes of Progress Circle */
            ProgressMode = (function () {
                function ProgressMode() {
                }
                ProgressMode.DETERMINATE = 'determinate';
                ProgressMode.INDETERMINATE = 'indeterminate';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "DETERMINATE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "INDETERMINATE", void 0);
                ProgressMode = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], ProgressMode);
                return ProgressMode;
            })();
            /**
             * <md-progress-circle> component.
             */
            MdProgressCircle = (function () {
                function MdProgressCircle() {
                    /**
                     * Value of the progress circle.
                     *
                     * Input:number, defaults to 0.
                     * value_ is bound to the host as the attribute aria-valuenow.
                     */
                    this.value_ = 0;
                }
                Object.defineProperty(MdProgressCircle.prototype, "_value", {
                    get: function () {
                        return this.value_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdProgressCircle.prototype, "_mode", {
                    get: function () {
                        return this.mode;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Gets the current stroke dash offset to represent the progress circle.
                 *
                 * The stroke dash offset specifies the distance between dashes in the circle's stroke.
                 * Setting the offset to a percentage of the total circumference of the circle, fills this
                 * percentage of the overall circumference of the circle.
                 */
                MdProgressCircle.prototype.strokeDashOffset = function () {
                    // To determine how far the offset should be, we multiple the current percentage by the
                    // total circumference.
                    // The total circumference is calculated based on the radius we use, 45.
                    // PI * 2 * 45
                    return 251.3274 * (100 - this.value_) / 100;
                };
                Object.defineProperty(MdProgressCircle.prototype, "value", {
                    /** Gets the progress value, returning the clamped value. */
                    get: function () {
                        return this.value_;
                    },
                    /** Sets the progress value, clamping before setting the internal value. */
                    set: function (v) {
                        if (lang_1.isPresent(v)) {
                            this.value_ = MdProgressCircle.clamp(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Clamps a value to be between 0 and 100. */
                MdProgressCircle.clamp = function (v) {
                    return Math.max(0, Math.min(100, v));
                };
                __decorate([
                    core_1.Input('value'), 
                    __metadata('design:type', Number)
                ], MdProgressCircle.prototype, "value_", void 0);
                __decorate([
                    core_1.HostBinding('attr.aria-valuenow'), 
                    __metadata('design:type', Object)
                ], MdProgressCircle.prototype, "_value", null);
                __decorate([
                    core_1.Input(),
                    one_of_1.OneOf([ProgressMode.DETERMINATE, ProgressMode.INDETERMINATE]), 
                    __metadata('design:type', String)
                ], MdProgressCircle.prototype, "mode", void 0);
                __decorate([
                    core_1.HostBinding('attr.mode'), 
                    __metadata('design:type', Object)
                ], MdProgressCircle.prototype, "_mode", null);
                MdProgressCircle = __decorate([
                    core_1.Component({
                        selector: 'md-progress-circle',
                        host: {
                            'role': 'progressbar',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                        },
                        templateUrl: './components/progress-circle/progress_circle.html',
                        styleUrls: ['./components/progress-circle/progress-circle.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdProgressCircle);
                return MdProgressCircle;
            })();
            exports_1("MdProgressCircle", MdProgressCircle);
            /**
             * <md-spinner> component.
             *
             * This is a component definition to be used as a convenience reference to create an
             * indeterminate <md-progress-circle> instance.
             */
            MdSpinner = (function (_super) {
                __extends(MdSpinner, _super);
                function MdSpinner() {
                    _super.apply(this, arguments);
                    this.mode = ProgressMode.INDETERMINATE;
                }
                MdSpinner = __decorate([
                    core_1.Component({
                        selector: 'md-spinner',
                        host: {
                            'role': 'progressbar',
                        },
                        templateUrl: './components/progress-circle/progress_circle.html',
                        styleUrls: ['./components/progress-circle/progress-circle.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdSpinner);
                return MdSpinner;
            })(MdProgressCircle);
            exports_1("MdSpinner", MdSpinner);
        }
    }
});
//# sourceMappingURL=progress_circle.js.map