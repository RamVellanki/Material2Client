import {Component, ViewEncapsulation, ChangeDetectionStrategy} from 'angular2/core';

@Component({
  selector: 'md-toolbar',
  templateUrl: './components/toolbar/toolbar.html',
  styleUrls: ['./components/toolbar/toolbar.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdToolbar {}
