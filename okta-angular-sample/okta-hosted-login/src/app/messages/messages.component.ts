/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';

import sampleConfig from '../app.config';
import { MessageService } from './messages.service';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';



interface Message {
  date: string;
  text: string;
}

const extract = (data: any) => {
  console.log(data);
  return data.operations;
};


const transform = (operations: any) => {
  return operations.map(op => {
    let index = 1;
    const date = new Date();
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return {
      date: `${day} ${time}`,
      text: op.descrizione,
      index: index++
    };
  })
};

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  failed: Boolean;
  messages: Array<Message>[];
  refreshStatus: String = "Refresh";

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient, private mesageService: MessageService) {
    this.messages = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    this.http.get(sampleConfig.resourceServer.messagesUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      }
    }).subscribe((data: any) => {
      let index = 1;
      const messages = data.messages.map((message) => {
        const date = new Date(message.date);
        const day = date.toLocaleDateString();
        const time = date.toLocaleTimeString();
        return {
          date: `${day} ${time}`,
          text: message.text,
          index: index++
        };
      });
      this.messages = [];
      [].push.apply(this.messages, messages);
    }, (err) => {
      console.error(err);
      this.failed = true;
    });
  }

  public refreshMessages(event) {
    this.refreshStatus = 'Refreshing '+event;
    const promise = this.mesageService.listOperations();
    const observable$ = from(promise);
    observable$.pipe(map(extract), map(transform)).subscribe(
      result => {        
        this.messages = [];
        [].push.apply(this.messages, result);
        this.refreshStatus = "Done";
      }, (err) => {
        console.error(err);
        this.failed = true;
        this.refreshStatus = "Failed";
      });
  }
}
