import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-membresia',
  templateUrl: './gestion-membresia.page.html',
  styleUrls: ['./gestion-membresia.page.scss'],
})
export class GestionMembresiaPage implements OnInit {

  constructor(
    private userService: UserService, 
    private router: Router, 
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async cancelarMembresia() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas cancelar tu plan y eliminar tu cuenta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.router.navigate(['/gympro']); // Redirige a /gympro cuando se cancela
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.userService.deleteAccount().subscribe(
              response => {
                console.log('Cuenta eliminada:', response);
                // Redirigir a la página de inicio de sesión después de eliminar la cuenta
                this.router.navigate(['/login']);
              },
              error => {
                console.error('Error al eliminar la cuenta:', error);
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }
}
