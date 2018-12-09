import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BlogAdapterRepository {

  constructor(private httpClient: HttpClient) { }

  getMostRecent(): Observable<any> {
    return this.httpClient.get('https://baconipsum.com/api/?type=meat-and-filler');
  }

}
