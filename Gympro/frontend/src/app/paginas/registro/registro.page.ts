import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'; 
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup; // Usar el operador ! para evitar el error

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService, // Inyecta el servicio de usuario
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController 
  ) {}

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.controls['password'].value === form.controls['confirmPassword'].value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const { nombre, email, password } = this.registroForm.value;
      const user = { name: nombre, email, password };
  
      this.userService.signup(user).subscribe(
        response => {
          console.log('User created successfully', response);
          this.presentAlert('Registro exitoso', 'El usuario ha sido registrado correctamente'); // Muestra la alerta de éxito
          this.router.navigate(['/inicio-sesion']);
        },
        error => {
          console.error('Error creating user', error);
          this.presentAlert('Error en el registro', 'Hubo un error al registrar el usuario'); // Muestra la alerta de error
        }
      );
    }
  }
  

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
