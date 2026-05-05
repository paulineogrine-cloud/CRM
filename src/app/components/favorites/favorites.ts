import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Contact, Contacts } from '../../services/contacts';


@Component({
  selector: 'app-favorites',
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  contacts: Contact[] = [];

  constructor(private service: Contacts) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.contacts = this.service.getFavorites();
  }
}
