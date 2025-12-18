import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegistroPage {

  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  registrar() {
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);
    }
  }

  get nombre() {
    return this.registroForm.get('nombre');
  }

  get telefono() {
    return this.registroForm.get('telefono');
  }

  get fechaNacimiento() {
    return this.registroForm.get('fechaNacimiento');
  }
}
