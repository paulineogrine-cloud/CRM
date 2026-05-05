import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Contacts } from '../../../services/contacts';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  constructor(private service: Contacts) {}

  contactForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastname:  new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required
    ]),
   company: new FormControl(''),
   jobTitle: new FormControl(''),
   notes: new FormControl(''),

  })

  OnSubmit() {
    if (this.contactForm.invalid) return;

    this.service.add({
      ...this.contactForm.value,
      favorite: false
    } as any);

    this.contactForm.reset();
    // 🔥 reset visuel complet
  this.contactForm.markAsPristine();
  this.contactForm.markAsUntouched();
  }
}
