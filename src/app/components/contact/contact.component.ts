// contact.component.ts
import {Component, inject} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  fb = inject(FormBuilder);
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.getRawValue());
      // Здесь: отправка через сервис
      this.contactForm.reset();
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    }
  }
}
