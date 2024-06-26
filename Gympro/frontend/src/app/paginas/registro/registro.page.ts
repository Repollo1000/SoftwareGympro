import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'; 
import { Router } from '@angular/router';

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
    private router: Router // Inyecta el router
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
          // Redirigir a la página de inicio de sesión u otra página
          this.router.navigate(['/inicio']);
        },
        error => {
          console.error('Error creating user', error);
          // Manejar el error de registro
        }
      );
    }
  }
}
