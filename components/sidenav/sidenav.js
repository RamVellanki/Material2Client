System.register(['angular2/core', 'angular2/src/facade/async', 'angular2/src/facade/collection', 'angular2/src/facade/exceptions', 'angular2/src/facade/lang', '../../directives/dir/dir', '../../core/annotations/one-of'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, async_1, collection_1, exceptions_1, lang_1, dir_1, one_of_1;
    var MdMissingSidenavException, MdDuplicatedSidenavException, MdSidenav, MdSidenavLayout, MD_SIDENAV_DIRECTIVES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (dir_1_1) {
                dir_1 = dir_1_1;
            },
            function (one_of_1_1) {
                one_of_1 = one_of_1_1;
            }],
        execute: function() {
            /**
             * Exception thrown when a MdSidenavLayout is missing both sidenavs.
             */
            MdMissingSidenavException = (function (_super) {
                __extends(MdMissingSidenavException, _super);
                function MdMissingSidenavException() {
                    _super.apply(this, arguments);
                }
                return MdMissingSidenavException;
            })(exceptions_1.BaseException);
            exports_1("MdMissingSidenavException", MdMissingSidenavException);
            /**
             * Exception thrown when two MdSidenav are matching the same side.
             */
            MdDuplicatedSidenavException = (function (_super) {
                __extends(MdDuplicatedSidenavException, _super);
                function MdDuplicatedSidenavException(align) {
                    _super.call(this, "A sidenav was already declared for 'align=\"" + align + "\"'");
                }
                return MdDuplicatedSidenavException;
            })(exceptions_1.BaseException);
            exports_1("MdDuplicatedSidenavException", MdDuplicatedSidenavException);
            /**
             * <md-sidenav> component.
             *
             * This component corresponds to the drawer of the sidenav.
             *
             * Please refer to README.md for examples on how to use it.
             */
            MdSidenav = (function () {
                /**
                 * @param elementRef_ The DOM element reference. Used for transition and width calculation.
                 *     If not available we do not hook on transitions.
                 */
                function MdSidenav(elementRef_) {
                    this.elementRef_ = elementRef_;
                    /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
                    this.align = 'start';
                    /** Mode of the sidenav; whether 'over' or 'side'. */
                    this.mode = 'over';
                    /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
                    this.onOpenStart = new async_1.EventEmitter();
                    /** Event emitted when the sidenav is fully opened. */
                    this.onOpen = new async_1.EventEmitter();
                    /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
                    this.onCloseStart = new async_1.EventEmitter();
                    /** Event emitted when the sidenav is fully closed. */
                    this.onClose = new async_1.EventEmitter();
                    this.transition_ = false;
                }
                Object.defineProperty(MdSidenav.prototype, "opened", {
                    /**
                     * Whether the sidenav is opened. We overload this because we trigger an event when it
                     * starts or end.
                     */
                    get: function () { return this.opened_; },
                    set: function (v) {
                        this.toggle(v);
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
                 * rejected if it didn't). */
                MdSidenav.prototype.open = function () {
                    return this.toggle(true);
                };
                /**
                 * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
                 * rejected if it didn't).
                 */
                MdSidenav.prototype.close = function () {
                    return this.toggle(false);
                };
                /**
                 * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
                 * close() when it's closed.
                 * @param isOpen
                 */
                MdSidenav.prototype.toggle = function (isOpen) {
                    if (!lang_1.isPresent(isOpen)) {
                        isOpen = !this.opened;
                    }
                    // Shortcut it if we're already opened.
                    if (isOpen === this.opened) {
                        if (!this.transition_) {
                            return async_1.PromiseWrapper.resolve(null);
                        }
                        else {
                            return isOpen ? this.openPromise_ : this.closePromise_;
                        }
                    }
                    this.opened_ = isOpen;
                    this.transition_ = true;
                    if (isOpen) {
                        this.onOpenStart.emit(null);
                    }
                    else {
                        this.onCloseStart.emit(null);
                    }
                    if (isOpen) {
                        if (this.openPromise_ == null) {
                            var completer = async_1.PromiseWrapper.completer();
                            this.openPromise_ = completer.promise;
                            this.openPromiseReject_ = completer.reject;
                            this.openPromiseResolve_ = completer.resolve;
                        }
                        return this.openPromise_;
                    }
                    else {
                        if (this.closePromise_ == null) {
                            var completer = async_1.PromiseWrapper.completer();
                            this.closePromise_ = completer.promise;
                            this.closePromiseReject_ = completer.reject;
                            this.closePromiseResolve_ = completer.resolve;
                        }
                        return this.closePromise_;
                    }
                };
                /**
                 * When transition has finished, set the internal state for classes and emit the proper event.
                 * The event passed is actually of type TransitionEvent, but that type is not available in
                 * Android so we use any.
                 * @param e The event.
                 * @private
                 */
                MdSidenav.prototype.onTransitionEnd_ = function (e) {
                    if (e.target == this.elementRef_.nativeElement
                        && e.propertyName.endsWith('transform')) {
                        this.transition_ = false;
                        if (this.opened_) {
                            if (this.openPromise_ != null) {
                                this.openPromiseResolve_();
                            }
                            if (this.closePromise_ != null) {
                                this.closePromiseReject_();
                            }
                            this.onOpen.emit(null);
                        }
                        else {
                            if (this.closePromise_ != null) {
                                this.closePromiseResolve_();
                            }
                            if (this.openPromise_ != null) {
                                this.openPromiseReject_();
                            }
                            this.onClose.emit(null);
                        }
                        this.openPromise_ = null;
                        this.closePromise_ = null;
                    }
                };
                Object.defineProperty(MdSidenav.prototype, "isClosing_", {
                    get: function () {
                        return !this.opened_ && this.transition_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "isOpening_", {
                    get: function () {
                        return this.opened_ && this.transition_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "isClosed_", {
                    get: function () {
                        return !this.opened_ && !this.transition_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "isOpened_", {
                    get: function () {
                        return this.opened_ && !this.transition_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "isEnd_", {
                    get: function () {
                        return this.align == 'end';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "modeSide_", {
                    get: function () {
                        return this.mode == 'side';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "modeOver_", {
                    get: function () {
                        return this.mode == 'over';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "modePush_", {
                    get: function () {
                        return this.mode == 'push';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "width_", {
                    /**
                     * This is public because we need it from MdSidenavLayout, but it's undocumented and should
                     * not be used outside.
                     * @private
                     */
                    get: function () {
                        if (this.elementRef_.nativeElement) {
                            return this.elementRef_.nativeElement.offsetWidth;
                        }
                        return 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(),
                    one_of_1.OneOf(['start', 'end']), 
                    __metadata('design:type', String)
                ], MdSidenav.prototype, "align", void 0);
                __decorate([
                    core_1.Input(),
                    one_of_1.OneOf(['over', 'push', 'side']), 
                    __metadata('design:type', String)
                ], MdSidenav.prototype, "mode", void 0);
                __decorate([
                    core_1.Input('opened'), 
                    __metadata('design:type', Boolean)
                ], MdSidenav.prototype, "opened_", void 0);
                __decorate([
                    core_1.Output('open-start'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "onOpenStart", void 0);
                __decorate([
                    core_1.Output('open'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "onOpen", void 0);
                __decorate([
                    core_1.Output('close-start'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "onCloseStart", void 0);
                __decorate([
                    core_1.Output('close'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "onClose", void 0);
                __decorate([
                    core_1.HostListener('transitionend', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], MdSidenav.prototype, "onTransitionEnd_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-closing'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "isClosing_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-opening'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "isOpening_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-closed'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "isClosed_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-opened'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "isOpened_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-end'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "isEnd_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-side'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "modeSide_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-over'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "modeOver_", null);
                __decorate([
                    core_1.HostBinding('class.md-sidenav-push'), 
                    __metadata('design:type', Object)
                ], MdSidenav.prototype, "modePush_", null);
                MdSidenav = __decorate([
                    core_1.Component({
                        selector: 'md-sidenav',
                        template: '<ng-content></ng-content>',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MdSidenav);
                return MdSidenav;
            })();
            exports_1("MdSidenav", MdSidenav);
            /**
             * <md-sidenav-layout> component.
             *
             * This is the parent component to one or two <md-sidenav>s that validates the state internally
             * and coordinate the backdrop and content styling.
             */
            MdSidenavLayout = (function () {
                function MdSidenavLayout(dir_) {
                    var _this = this;
                    this.dir_ = dir_;
                    // If a `Dir` directive exists up the tree, listen direction changes and update the left/right
                    // properties to point to the proper start/end.
                    if (dir_ != null) {
                        dir_.dirChange.add(function () { return _this.validateDrawers_(); });
                    }
                }
                Object.defineProperty(MdSidenavLayout.prototype, "start", {
                    get: function () { return this.start_; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenavLayout.prototype, "end", {
                    get: function () { return this.end_; },
                    enumerable: true,
                    configurable: true
                });
                MdSidenavLayout.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    // On changes, assert on consistency.
                    async_1.ObservableWrapper.subscribe(this.sidenavs_.changes, function () { return _this.validateDrawers_(); });
                    this.validateDrawers_();
                };
                /**
                 * Validate the state of the sidenav children components.
                 * @private
                 */
                MdSidenavLayout.prototype.validateDrawers_ = function () {
                    var _this = this;
                    this.start_ = this.end_ = null;
                    if (this.sidenavs_.length === 0) {
                        throw new MdMissingSidenavException();
                    }
                    // Ensure that we have at most one start and one end sidenav.
                    collection_1.iterateListLike(this.sidenavs_, function (sidenav) {
                        if (sidenav.align == 'end') {
                            if (_this.end_ != null) {
                                throw new MdDuplicatedSidenavException('end');
                            }
                            _this.end_ = sidenav;
                        }
                        else {
                            if (_this.start_ != null) {
                                throw new MdDuplicatedSidenavException('start');
                            }
                            _this.start_ = sidenav;
                        }
                    });
                    this.right_ = this.left_ = null;
                    // Detect if we're LTR or RTL.
                    if (this.dir_ == null || this.dir_.value == 'ltr') {
                        this.left_ = this.start_;
                        this.right_ = this.end_;
                    }
                    else {
                        this.left_ = this.end_;
                        this.right_ = this.start_;
                    }
                };
                MdSidenavLayout.prototype.closeModalSidenav_ = function () {
                    if (this.start_ != null && this.start_.mode != 'side') {
                        this.start_.close();
                    }
                    if (this.end_ != null && this.end_.mode != 'side') {
                        this.end_.close();
                    }
                };
                MdSidenavLayout.prototype.isShowingBackdrop_ = function () {
                    return (this.start_ != null && this.start_.mode != 'side' && this.start_.opened)
                        || (this.end_ != null && this.end_.mode != 'side' && this.end_.opened);
                };
                /**
                 * Return the width of the sidenav, if it's in the proper mode and opened.
                 * This may relayout the view, so do not call this often.
                 * @param MdSidenav
                 * @private
                 */
                MdSidenavLayout.prototype.getSidenavEffectiveWidth_ = function (sidenav, mode) {
                    if (sidenav != null && sidenav.mode == mode && sidenav.opened) {
                        return sidenav.width_;
                    }
                    return 0;
                };
                MdSidenavLayout.prototype.getMarginLeft_ = function () {
                    return this.getSidenavEffectiveWidth_(this.left_, 'side');
                };
                MdSidenavLayout.prototype.getMarginRight_ = function () {
                    return this.getSidenavEffectiveWidth_(this.right_, 'side');
                };
                MdSidenavLayout.prototype.getPositionLeft_ = function () {
                    return this.getSidenavEffectiveWidth_(this.left_, 'push');
                };
                MdSidenavLayout.prototype.getPositionRight_ = function () {
                    return this.getSidenavEffectiveWidth_(this.right_, 'push');
                };
                __decorate([
                    core_1.ContentChildren(MdSidenav), 
                    __metadata('design:type', core_1.QueryList)
                ], MdSidenavLayout.prototype, "sidenavs_", void 0);
                MdSidenavLayout = __decorate([
                    core_1.Component({
                        selector: 'md-sidenav-layout',
                        directives: [MdSidenav],
                        templateUrl: './components/sidenav/sidenav.html',
                        styleUrls: ['./components/sidenav/sidenav.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }),
                    __param(0, core_1.Optional()),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [dir_1.Dir])
                ], MdSidenavLayout);
                return MdSidenavLayout;
            })();
            exports_1("MdSidenavLayout", MdSidenavLayout);
            exports_1("MD_SIDENAV_DIRECTIVES", MD_SIDENAV_DIRECTIVES = lang_1.CONST_EXPR([MdSidenavLayout, MdSidenav]));
        }
    }
});
//# sourceMappingURL=sidenav.js.map