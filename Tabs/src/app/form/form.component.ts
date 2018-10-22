import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { ResultComponent } from "../result/result.component";

interface User {
  name: string;
  password: string;
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  public datos = "";
  public name = "";
  public surname = "";
  public age = "";

  public username = "";
  public password1 = "";
  public password2 = "";

  public idname = "";
  public pw = "";

  private arrayUsers: User[] = [];



  constructor(private alertController: AlertController, private navController: NavController, private modalCtrl:ModalController) { }

  ngOnInit() {
  }


  async presentAlert(header:string, subtitle: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtitle,
      message: message,
      buttons: ["OK"]
    });

    await alert.present();
  }

  async presentResultAlert(header:string, subtitle: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtitle,
      message: message,
      buttons: [{
        text: 'Continuar',
        handler: () => {
          this.presentModal();
        }
      }]
    });

    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ResultComponent,
      componentProps: { users: this.arrayUsers }
    });
    return await modal.present();
  }

  usernameUsed(username: string){
    for(var i of this.arrayUsers){
      if(i.name === this.username){
        return true;
      }
    }
    return false;
  }

  escribirDatos(){
    if(((this.name === "") || (this.name === null)) || ((this.surname === "") || (this.surname === null)) || ((this.age === "") || (this.age === null))){
      this.presentAlert("Datos erróneos", "No has rellenado los campos correctamente", null);
    } else {
      this.datos = this.name + " " + this.surname + " tiene " + this.age + " años.";
    }
  }

  registrarse(){

    if((this.username === "") || (this.username === null)){
      this.presentAlert("Registro fallido", "No has rellenado el campo Nombre de Usuario", "Rellena todos los campos de registro para continuar");
    }else if((this.password1 === "") || (this.password1 === null)){
      this.presentAlert("Registro fallido", "No has rellenado el campo Contraseña", "Rellena todos los campos de registro para continuar");
    }else if((this.password2 === "") || (this.password2 === null)){
      this.presentAlert("Registro fallido", "No has rellenado el campo Repetir Contraseña", "Rellena todos los campos de registro para continuar");
    } else if (this.password1 !== this.password2){
      this.presentAlert("Registro fallido", "Las contraseñas introducidas no coinciden", "Las contraseñas deben coincidir para continuar");
    } else if(this.usernameUsed(this.username)){
      this.presentAlert("Registro fallido", "El nombre de usuario " + this.username + " ya ha sido cogido", "Introduzca un nombre de usuario diferente");
    } else {

      let usr: User = {name: this.username, password: this.password1};
      console.log(usr);
      this.arrayUsers.push(usr);

      console.log(this.arrayUsers);

      this.presentAlert("Registro completado", "El usuario " + this.username + " se ha registrado correctamente", "Puede proceder a identificarse");
    }

  }

  identificarse(){
    if((this.idname === "") || (this.idname === null)){
      this.presentAlert("Identificación fallida", "No has rellenado el campo Nombre de Usuario", "Rellena todos los campos de identificación para continuar");
    } else if((this.pw === "") || (this.pw === null)){
      this.presentAlert("Identificación fallida", "No has rellenado el campo Contraseña", "Rellena todos los campos de identificación para continuar");
    } else {
      for(var i of this.arrayUsers){
        console.log( i );
        if((i.name === this.idname) && (i.password === this.pw)){
          this.presentResultAlert("Identificación completada", "Usuario y contraseña correctos", "Verás ahora lo que tenemos");
          return;
        }
      }
      this.presentAlert("Identificación errónea", "La combinación de usuario y contraseña no existe", "Intentalo de nuevo");
    }
  }

}
