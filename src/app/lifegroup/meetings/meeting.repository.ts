import { Family } from './../familes/family.component.model';
import { Meeting, MenuItem } from './meeting.component.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MeetingRepository {
  host = 'http://lifegroupservices.rwchildress.org';
  baseUrl = '/lifegroup';

  constructor(private httpClient: HttpClient) { }

  findCurrentMeeting(): Observable<Meeting> {
    const endpoint = '/meeting';
    const url = `${this.host}${this.baseUrl}${endpoint}`;
    return <Observable<Meeting>>this.httpClient.get(url);
  }

  findAllFamilyMembers(): Observable<Family[]> {
    const endpoint = '/families';
    const url = `${this.host}${this.baseUrl}${endpoint}`;
    return <Observable<Family[]>> this.httpClient.get(url);
  }

  addMenuItem(menuItem: MenuItem): Observable<number> {
    const endpoint = '/menuitem';
    const url = `${this.host}${this.baseUrl}${endpoint}`;
    return <Observable<number>> this.httpClient.put(url, menuItem);
  }

  deleteMenuItem(id: number): Observable<any> {
    const endpoint = '/menuitem';
    const url = `${this.host}${this.baseUrl}${endpoint}/${id}`;
    return this.httpClient.delete(url);
  }
}
