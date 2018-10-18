import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ImgViewComponent } from '../img-view/img-view.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemonList: any;

  constructor(private modalCtrl:ModalController,private alertCtrl:AlertController) {

    this.pokemonList = [
      ["Bulbasaur", "../../assets/pokemon/001bulbasaur.png"],
      ["Ivysaur", "../../assets/pokemon/002ivysaur.png"],
      ["Venusaur", "../../assets/pokemon/003venusaur.png"],
      ["Charmander", "../../assets/pokemon/004charmander.png"],
      ["Charmeleon", "../../assets/pokemon/005charmeleon.png"],
      ["Charizard", "../../assets/pokemon/006charizard.png"],
      ["Squirtle", "../../assets/pokemon/007squirtle.png"],
      ["Wartortle", "../../assets/pokemon/008wartortle.png"],
      ["Blastoise", "../../assets/pokemon/009blastoise.png"]
    ];

  }

  async presentModal(i:int) {
    const modal = await this.modalCtrl.create({
      component: ImgViewComponent,
      componentProps: { pokemon: this.pokemonList[i] }
    });
    return await modal.present();
  }

  pushImage(i:int){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    // this.navCtrl.push(img-view, {
    //   name: this.pokemonList[i],
    //   img: this.pokemonList[i]
    // });
  }

  ngOnInit() {
  }


}
