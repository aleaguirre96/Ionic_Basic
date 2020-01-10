import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string;
  constructor( public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async cambiarTitulo() {
    const newInputTitulo = await this.alertCtrl.create(
      {
        header: 'Nuevo Titulo',
        subHeader: 'Ingrese el nuevo nombre',
        inputs: [
          {
            name: 'txtNombre',
            type: 'text',
            placeholder: 'nuevo nombre',
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secundary',
            handler: () => {
              console.log('Cancelar');
            }
          },
          {
            text: 'Aceptar',
            handler: (data) => {
              this.titulo = data.txtNombre;
            }

          }
        ]
      }
    );

    await newInputTitulo.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Cobro',
      message: 'Debe presentarse a pagar.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secundary',
          handler: (blah) => {
            console.log('Se presSiona Cancelar');
          }
        }, {
          text: 'Ok',
          handler: (blah) => {
            console.log('Se pressiona OK');
          }
        }
      ]
    });

    await alert.present();
  }

}
