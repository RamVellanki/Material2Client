import {Component} from 'angular2/core';
import {MdButton, MdAnchor} from '../components/button/button';
import {MD_CARD_DIRECTIVES} from '../components/card/card';
// import {CardDemo} from './card/card-demo';
// import {ButtonDemo} from './button/button-demo';
// import {SidenavDemo} from './sidenav/sidenav-demo';
// import {ProgressCircleDemo} from './progress-circle/progress-circle-demo';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
// import {Dir} from '../directives/dir/dir';
// import {MdButton} from '../components/button/button';

@Component({
  selector: 'home',
  template: ''
})
export class Home {}

@Component({
  selector: 'demo-app',
  providers: [],
  templateUrl : 'demo-app/demo-app.html',
  styleUrls: ['demo-app/demo-app.css'],
  directives: [MdButton, MdAnchor, MD_CARD_DIRECTIVES]
})

export class DemoApp { }
