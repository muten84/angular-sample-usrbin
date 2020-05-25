import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import sampleConfig from '../app.config';

@Injectable({
    providedIn: 'root'
  })
  export class MessageService {
  
    constructor(public oktaAuth: OktaAuthService, private http: HttpClient) { }
  
    public async listMessages() : Promise<any>{
      const accessToken = await this.oktaAuth.getAccessToken();
      const url  = sampleConfig.resourceServer.auditUrl+"/operations?size=0&startIndex=0&resultType=list";
      const observable = this.http.get(url, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        }
      });
      return observable.toPromise();
    }

    public async listOperations() : Promise<any>{
        const accessToken = await this.oktaAuth.getAccessToken();
        const url  = sampleConfig.resourceServer.auditUrl+"/operations?size=0&startIndex=0&resultType=list";
        const observable = this.http.get(url, {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          }
        });
        return observable.toPromise();
      }
  }