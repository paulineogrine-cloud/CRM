import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, Contacts } from '../../../services/contacts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  imports: [CommonModule],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css',
})
export class ContactDetail {

  contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    private service: Contacts
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.contact = this.service.getAll()
        .find(c => c.id === id);
    }
  }
}
