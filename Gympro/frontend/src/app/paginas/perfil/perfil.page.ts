// perfil.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userProfile: any = {}; // Definir userProfile como objeto vacío inicialmente

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadUserProfile(); // Cargar el perfil del usuario al inicializar el componente
  }

  loadUserProfile() {
    this.userService.getProfile().subscribe(
      (profile: any) => {
        console.log('Profile loaded:', profile); // Verificar datos del perfil cargados
        this.userProfile = profile[0]; // Asignar el primer elemento del arreglo (debería ser solo uno)
      },
      (error: any) => {
        console.error('Error loading profile:', error);
      }
    );
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmar cierre de sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/gympro']);
  }
}
