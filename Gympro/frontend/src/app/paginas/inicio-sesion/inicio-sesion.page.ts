import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.http.post('http://localhost:3000/auth/login', formData)
        .subscribe((response: any) => {
          console.log('Inicio de sesión exitoso', response);
          localStorage.setItem('token', response.token);
          this.presentAlert('Éxito', 'Inicio de sesión exitoso');

          // Verificar el rol del usuario y redirigir según corresponda
          if (response.rol === 'Admin') {
            this.router.navigate(['/pagina-especial-admin']); // Redirige a página especial para admin
          } else {
            this.router.navigate(['/inicio']); // Redirige a página normal de inicio
          }
        }, (error: HttpErrorResponse) => {
          console.error('Error en el inicio de sesión', error);
          if (error.status === 401) {
            this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
            this.presentAlert('Error', 'Correo electrónico o contraseña incorrectos.');
          } else {
            this.errorMessage = 'Error en el inicio de sesión. Por favor, intenta de nuevo más tarde.';
            this.presentAlert('Error', 'Error en el inicio de sesión. Por favor, intenta de nuevo más tarde.');
          }
        });
    }
  }
}
