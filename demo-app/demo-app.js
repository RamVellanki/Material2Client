System.register(['angular2/core', '../components/button/button', '../components/card/card'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_1, card_1;
    var Home, DemoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            // import {CardDemo} from './card/card-demo';
            // import {ButtonDemo} from './button/button-demo';
            // import {SidenavDemo} from './sidenav/sidenav-demo';
            // import {ProgressCircleDemo} from './progress-circle/progress-circle-demo';
            // import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
            // import {Dir} from '../directives/dir/dir';
            // import {MdButton} from '../components/button/button';
            Home = (function () {
                function Home() {
                }
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
            DemoApp = (function () {
                function DemoApp() {
                }
                DemoApp = __decorate([
                    core_1.Component({
                        selector: 'demo-app',
                        providers: [],
                        templateUrl: 'demo-app/demo-app.html',
                        styleUrls: ['demo-app/demo-app.css'],
                        directives: [button_1.MdButton, button_1.MdAnchor, card_1.MD_CARD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DemoApp);
                return DemoApp;
            })();
            exports_1("DemoApp", DemoApp);
        }
    }
});
//# sourceMappingURL=demo-app.js.map