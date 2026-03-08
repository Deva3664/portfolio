import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    CommonModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', email: '', message: '' };
    }, 3000);
  }
}