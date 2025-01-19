import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulario enviado:', this.contact);
    } else {
      console.log('Formulario no válido');
    }
  }
}
