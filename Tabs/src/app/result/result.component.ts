import { Component, OnInit, Input } from '@angular/core';

import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() usrs: any;

  constructor(private np: NavParams) {

    this.usrs = np.get('users');

  }

  ngOnInit() {
  }

}
