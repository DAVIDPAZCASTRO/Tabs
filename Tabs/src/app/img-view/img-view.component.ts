import { Component, OnInit, Input} from '@angular/core';

import { NavController,ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-img-view',
  templateUrl: './img-view.component.html',
  styleUrls: ['./img-view.component.scss']
})
export class ImgViewComponent implements OnInit {

  @Input() nombrePokemon: any;
  @Input() imagenPokemon: any;

  constructor(private nav:NavController, private modalCtrl:ModalController, private np:NavParams) {
    this.nombrePokemon = np.get('pokemon')[0];
    this.imagenPokemon = np.get('pokemon')[1];
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }


  ngOnInit() {
  }

}
