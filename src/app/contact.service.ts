import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL: string ='/api/';

  constructor(private http: HttpClient) { }
  getContacts(){
    return this.http.get(this.API_URL +'contacts' )
  }

  getContact(contactId: any){
    return this.http.get(`${this.API_URL + 'contacts'}/${contactId}`)
  }
}
