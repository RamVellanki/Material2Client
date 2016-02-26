System.register(['angular2/core', '../../components/button/button', '../../components/progress-circle/progress_circle'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_1, progress_circle_1;
    var ProgressCircleDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (progress_circle_1_1) {
                progress_circle_1 = progress_circle_1_1;
            }],
        execute: function() {
            ProgressCircleDemo = (function () {
                function ProgressCircleDemo() {
                    this.progressValue = 40;
                }
                ProgressCircleDemo.prototype.step = function (val) {
                    this.progressValue += val;
                };
                ProgressCircleDemo = __decorate([
                    core_1.Component({
                        selector: 'progress-circle-demo',
                        templateUrl: 'demo-app/progress-circle/progress-circle-demo.html',
                        styleUrls: ['demo-app/progress-circle/progress-circle-demo.css'],
                        directives: [progress_circle_1.MdProgressCircle, progress_circle_1.MdSpinner, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressCircleDemo);
                return ProgressCircleDemo;
            })();
            exports_1("ProgressCircleDemo", ProgressCircleDemo);
        }
    }
});
//# sourceMappingURL=progress-circle-demo.js.map