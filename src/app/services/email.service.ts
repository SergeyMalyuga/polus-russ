import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../core/constants/consts';
import { ContactForm } from '../core/models/contact-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private http = inject(HttpClient);

  public sendEmail(contactForm: ContactForm): Observable<ContactForm> {
    const headers = new HttpHeaders({ Accept: 'application/json' });
    return this.http.post<ContactForm>(BASE_URL, { contactForm }, { headers });
  }
}
