import { Family } from './../familes/family.component.model';
import { Meeting, MenuItem } from './meeting.component.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MeetingRepository {
  protocol = 'https://';
  host = 'lifegroupservices.rwchildress.org';
  api = '/lifegroup';

  constructor(private httpClient: HttpClient) { }

  findCurrentMeeting(): Observable<Meeting> {
    const resource = '/meeting';
    const url = `${this.protocol}${this.host}${this.api}${resource}`;
    return <Observable<Meeting>>this.httpClient.get(url);
  }

  findAllFamilyMembers(): Observable<Family[]> {
    const resource = '/families';
    const url = `${this.protocol}${this.host}${this.api}${resource}`;
    return <Observable<Family[]>> this.httpClient.get(url);
  }

  saveMenuItem(menuItem: MenuItem): Observable<number> {
    const resource = '/menuitem';
    const url = `${this.protocol}${this.host}${this.api}${resource}`;
    return <Observable<number>> this.httpClient.put(url, menuItem);
  }

  deleteMenuItem(id: number): Observable<any> {
    const resource = '/menuitem';
    const url = `${this.protocol}${this.host}${this.api}${resource}/${id}`;
    return this.httpClient.delete(url);
  }

  completeMeeting(id: number): Observable<any> {
    const resource = '/meeting';
    const action = '/complete';
    const url = `${this.protocol}${this.host}${this.api}${resource}/${id}${action}`;

    // empty body because not needed for this API
    return this.httpClient.patch(url, {});
  }
}
