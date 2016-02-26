import {Component, ViewEncapsulation, ChangeDetectionStrategy} from 'angular2/core';

@Component({
  selector: 'md-card',
  templateUrl: './components/card/card.html',
  styleUrls: ['./components/card/card.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdCard {}
