System.register(['angular2/core', '../../components/button/button', '../../components/card/card'], function(exports_1) {
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
    var CardDemo;
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
            CardDemo = (function () {
                function CardDemo() {
                }
                CardDemo = __decorate([
                    core_1.Component({
                        selector: 'card-demo',
                        templateUrl: 'demo-app/card/card-demo.html',
                        styleUrls: ['demo-app/card/card-demo.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardDemo);
                return CardDemo;
            })();
            exports_1("CardDemo", CardDemo);
        }
    }
});
//# sourceMappingURL=card-demo.js.map