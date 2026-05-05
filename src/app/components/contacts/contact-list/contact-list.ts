import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact, Contacts } from '../../../services/contacts';


@Component({
  selector: 'app-contact-list',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  count = 0;
  // creation variable local pour afficher mes données
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  searchQuery: string = '';

  constructor(private service: Contacts) {}

ngOnInit() {
  this.load();
}

load() {
  this.contacts = this.service.getAll();
  this.filteredContacts = this.contacts;
  this.updateCount();
}

onSearchChange() {
  if (this.searchQuery.trim() === '') {
    this.filteredContacts = this.contacts;
  } else {
    const query = this.searchQuery.toLowerCase();
    this.filteredContacts = this.contacts.filter(contact =>
      contact.firstname.toLowerCase().startsWith(query) ||
      contact.lastname.toLowerCase().startsWith(query)
    );
  }
  this.updateCount();
}

updateCount() {
  this.count = this.filteredContacts.length;
}


delete(id: string) {
  this.service.deleteContact(id);
  this.load();
}

toggleFav(id: string) {
  this.service.toggleFavorite(id);
  this.load()
}
}
