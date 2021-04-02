import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    throw new Error('Method not implemented.');

    let data = [
      { id: 1, name: 'sowmya', email: 'sowmya@gmail.com'},
      { id: 2, name: 'druvitha', email: 'druvitha@gmail.com'},
      { id: 3, name: 'sai', email: 'sai@gmail.com'},
      { id: 4, name: 'balu', email: 'balu@gmail.com'}
    ];
    return {data};
  }
}
