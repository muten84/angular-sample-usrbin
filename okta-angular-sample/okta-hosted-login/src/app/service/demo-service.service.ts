import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import sampleConfig from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) { }
 
}
