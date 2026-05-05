import { Injectable } from '@angular/core';

export interface Contact {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;

  company: string;
  jobTitle: string;


  favorite: boolean;

  notes: string;

  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class Contacts {

  private key = 'contacts';

  getAll(): Contact[] {
    const stored = localStorage.getItem(this.key);
    return stored ? JSON.parse(stored) : []
  }

  private save(contacts: Contact[]) {
    localStorage.setItem(this.key, JSON.stringify(contacts));
  }


  add(contact: Contact) {

    const contacts = this.getAll();
    const newContact: Contact = {
    id: crypto.randomUUID(),
    firstname: contact.firstname,
    lastname: contact.lastname,

    email: contact.email,
    phone: contact.phone,

    company: contact.company,
    jobTitle: contact.jobTitle,

    favorite: contact.favorite ?? false,

    notes: contact.notes,

    createdAt: new Date().toISOString()
  }
  contacts.push(newContact)
  this.save(contacts)
}

deleteContact(id: string) {
  const contact = this.getAll().filter((c: Contact) => c.id !== id);
  this.save(contact);
}

toggleFavorite(id: string) {
    const contacts = this.getAll();

    const updatedContacts = contacts.map((c: Contact) => {
      if (c.id === id) {
        return {
          ...c,
          favorite: !c.favorite
        };
      }
      return c;
    });

    this.save(updatedContacts);
  }

  // favorite only
  getFavorites(): Contact[] {
    return this.getAll().filter((c: Contact) => c.favorite);
  }
}


