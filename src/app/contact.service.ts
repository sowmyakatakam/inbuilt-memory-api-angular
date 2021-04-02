import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL: string ='/contacts';

  constructor(private http: HttpClient) { }
  getContacts(){
    return this.http.get(this.API_URL)
  }

  getContact(contactId: any){
    return this.http.get(`${this.API_URL + 'contacts'}/${contactId}`)
  }
}
