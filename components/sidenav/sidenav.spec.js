System.register(['angular2/testing', '../../core/facade/testing', '../../core/facade/html', 'angular2/core', 'angular2/platform/browser', 'angular2/src/facade/promise', 'angular2/src/facade/async', './sidenav'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var testing_1, testing_2, html_1, core_1, browser_1, promise_1, async_1, sidenav_1;
    var BasicTestApp;
    function wait(msec) {
        var completer = promise_1.PromiseWrapper.completer();
        async_1.TimerWrapper.setTimeout(function () {
            completer.resolve(null);
        }, msec);
        return completer.promise;
    }
    function waitOnEvent(fixture, by, propertyName) {
        fixture.detectChanges();
        // Wait for the animation end.
        var completer = promise_1.PromiseWrapper.completer();
        var component = fixture.debugElement.query(by).componentInstance;
        component[propertyName].subscribe(function () {
            completer.resolve(null);
        });
        return completer.promise;
    }
    function main() {
        testing_2.describe('MdSidenav', function () {
            var builder;
            testing_2.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
                builder = tcb;
            }));
            testing_2.describe('methods', function () {
                testing_2.it('should be able to open and close', function (done) {
                    var testComponent;
                    var fixture;
                    return builder.createAsync(BasicTestApp)
                        .then(function (f) {
                        fixture = f;
                        testComponent = fixture.debugElement.componentInstance;
                        fixture.detectChanges();
                        return wait(1);
                    }).then(function (_) {
                        var openButtonElement = fixture.debugElement.query(browser_1.By.css('.open'));
                        openButtonElement.nativeElement.click();
                        fixture.detectChanges();
                        return wait(1);
                    }).then(function (_) {
                        testing_2.expect(testComponent.openStartCount).toBe(1);
                        testing_2.expect(testComponent.openCount).toBe(0);
                    })
                        .then(function (_) { return waitOnEvent(fixture, browser_1.By.directive(sidenav_1.MdSidenav), 'onOpen'); })
                        .then(function (_) {
                        testing_2.expect(testComponent.openStartCount).toBe(1);
                        testing_2.expect(testComponent.openCount).toBe(1);
                        testing_2.expect(testComponent.closeStartCount).toBe(0);
                        testing_2.expect(testComponent.closeCount).toBe(0);
                        var sidenavElement = fixture.debugElement.query(browser_1.By.css('md-sidenav'));
                        var sidenavBackdropElement = fixture.debugElement.query(browser_1.By.css('.md-sidenav-backdrop'));
                        testing_2.expect(html_1.getComputedStyle(sidenavElement.nativeElement).visibility).toEqual('visible');
                        testing_2.expect(html_1.getComputedStyle(sidenavBackdropElement.nativeElement).visibility).toEqual('visible');
                        // Close it.
                        var closeButtonElement = fixture.debugElement.query(browser_1.By.css('.close'));
                        closeButtonElement.nativeElement.click();
                        fixture.detectChanges();
                        return wait(1);
                    })
                        .then(function (_) { return wait(1); })
                        .then(function (_) {
                        testing_2.expect(testComponent.openStartCount).toBe(1);
                        testing_2.expect(testComponent.openCount).toBe(1);
                        testing_2.expect(testComponent.closeStartCount).toBe(1);
                        testing_2.expect(testComponent.closeCount).toBe(0);
                    })
                        .then(function (_) { return waitOnEvent(fixture, browser_1.By.directive(sidenav_1.MdSidenav), 'onClose'); })
                        .then(function (_) { return fixture.detectChanges(); })
                        .then(function (_) {
                        testing_2.expect(testComponent.openStartCount).toBe(1);
                        testing_2.expect(testComponent.openCount).toBe(1);
                        testing_2.expect(testComponent.closeStartCount).toBe(1);
                        testing_2.expect(testComponent.closeCount).toBe(1);
                        var sidenavElement = fixture.debugElement.query(browser_1.By.css('md-sidenav'));
                        var sidenavBackdropElement = fixture.debugElement.query(browser_1.By.css('.md-sidenav-backdrop'));
                        testing_2.expect(html_1.getComputedStyle(sidenavElement.nativeElement).visibility).toEqual('hidden');
                        testing_2.expect(html_1.getComputedStyle(sidenavBackdropElement.nativeElement).visibility).toEqual('hidden');
                    })
                        .then(function (_) { done(); });
                }, 8000);
                testing_2.it('open() and close() return a promise that resolves after the animation ended', function (done) {
                    var fixture;
                    var sidenav;
                    var promise;
                    var called = false;
                    return builder.createAsync(BasicTestApp)
                        .then(function (f) {
                        fixture = f;
                        sidenav = fixture.debugElement.query(browser_1.By.directive(sidenav_1.MdSidenav)).componentInstance;
                        promise = sidenav.open();
                        promise.then(function (_) { return called = true; });
                    })
                        .then(function (_) { return wait(1); })
                        .then(function (_) { return fixture.detectChanges(); })
                        .then(function (_) {
                        testing_2.expect(called).toBe(false);
                    })
                        .then(function (_) { return promise; })
                        .then(function (_) { return testing_2.expect(called).toBe(true); })
                        .then(function (_) {
                        // Close it now.
                        called = false;
                        promise = sidenav.close();
                        promise.then(function (_) { return called = true; });
                    })
                        .then(function (_) { return wait(1); })
                        .then(function (_) { return fixture.detectChanges(); })
                        .then(function (_) {
                        testing_2.expect(called).toBe(false);
                    })
                        .then(function (_) { return promise; })
                        .then(function (_) { return testing_2.expect(called).toBe(true); })
                        .then(function (_) { done(); });
                }, 8000);
                testing_2.it('open() twice returns the same promise', function (done) {
                    var fixture;
                    var sidenav;
                    var promise;
                    return builder.createAsync(BasicTestApp)
                        .then(function (f) {
                        fixture = f;
                        sidenav = fixture.debugElement.query(browser_1.By.directive(sidenav_1.MdSidenav)).componentInstance;
                        promise = sidenav.open();
                        testing_2.expect(sidenav.open()).toBe(promise);
                    })
                        .then(function (_) { return wait(1); })
                        .then(function (_) {
                        fixture.detectChanges();
                        return promise;
                    })
                        .then(function (_) {
                        promise = sidenav.close();
                        testing_2.expect(sidenav.close()).toBe(promise);
                    })
                        .then(function (_) { done(); });
                });
                testing_2.it('open() then close() cancel animations when called too fast', function (done) {
                    var fixture;
                    var sidenav;
                    var closePromise;
                    var openCalled = false;
                    var openCancelled = false;
                    var closeCalled = false;
                    return builder.createAsync(BasicTestApp)
                        .then(function (f) {
                        fixture = f;
                        sidenav = fixture.debugElement.query(browser_1.By.directive(sidenav_1.MdSidenav)).componentInstance;
                        sidenav.open().then(function (_) {
                            openCalled = true;
                        }, function () {
                            openCancelled = true;
                        });
                    })
                        .then(function (_) { return wait(1); })
                        .then(function (_) { return fixture.detectChanges(); })
                        .then(function (_) { return wait(50); })
                        .then(function (_) {
                        closePromise = sidenav.close().then(function (_) {
                            closeCalled = true;
                        });
                        return wait(1);
                    })
                        .then(function (_) {
                        fixture.detectChanges();
                        return closePromise;
                    })
                        .then(function (_) {
                        testing_2.expect(openCalled).toBe(false);
                        testing_2.expect(openCancelled).toBe(true);
                        testing_2.expect(closeCalled).toBe(true);
                    })
                        .then(function (_) { done(); });
                }, 8000);
                testing_2.it('close() then open() cancel animations when called too fast', function (done) {
                    var fixture;
                    var sidenav;
                    var openPromise;
                    var closeCalled = false;
                    var closeCancelled = false;
                    var openCalled = false;
                    return builder.createAsync(BasicTestApp)
                        .then(function (f) {
                        fixture = f;
                        sidenav = fixture.debugElement.query(browser_1.By.directive(sidenav_1.MdSidenav)).componentInstance;
                        /** First, open it. */
                        openPromise = sidenav.open();
                    })
                        .then(function (_) { return wait(1); })
                        .then(function (_) {
                        fixture.detectChanges();
                        return openPromise;
                    })
                        .then(function (_) {
                        // Then close and check behavior.
                        sidenav.close().then(function (_) {
                            closeCalled = true;
                        }, function () {
                            closeCancelled = true;
                        });
                    })
                        .then(function (_) { return wait(1); })
                        .then(function (_) { return fixture.detectChanges(); })
                        .then(function (_) { return wait(50); })
                        .then(function (_) {
                        openPromise = sidenav.open().then(function (_) {
                            openCalled = true;
                        }, done.fail);
                        return wait(1);
                    })
                        .then(function (_) {
                        fixture.detectChanges();
                        return openPromise;
                    })
                        .then(function (_) {
                        testing_2.expect(closeCalled).toBe(false);
                        testing_2.expect(closeCancelled).toBe(true);
                        testing_2.expect(openCalled).toBe(true);
                    })
                        .then(function (_) { done(); });
                }, 8000);
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (html_1_1) {
                html_1 = html_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (promise_1_1) {
                promise_1 = promise_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            }],
        execute: function() {
            /** Test component that contains an MdSidenavLayout and one MdSidenav. */
            BasicTestApp = (function () {
                function BasicTestApp() {
                    this.openStartCount = 0;
                    this.openCount = 0;
                    this.closeStartCount = 0;
                    this.closeCount = 0;
                }
                BasicTestApp = __decorate([
                    core_1.Component({
                        selector: 'test-app',
                        directives: [sidenav_1.MD_SIDENAV_DIRECTIVES],
                        template: "\n    <md-sidenav-layout>\n      <md-sidenav #sidenav align=\"start\"\n                  (open-start)=\"openStartCount = openStartCount + 1\"\n                  (open)=\"openCount = openCount + 1\"\n                  (close-start)=\"closeStartCount = closeStartCount + 1\"\n                  (close)=\"closeCount = closeCount + 1\">\n        Content.\n      </md-sidenav>\n      <button (click)=\"sidenav.open()\" class=\"open\"></button>\n      <button (click)=\"sidenav.close()\" class=\"close\"></button>\n    </md-sidenav-layout>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], BasicTestApp);
                return BasicTestApp;
            })();
        }
    }
});
//# sourceMappingURL=../../../../components/sidenav/sidenav.spec.js.map