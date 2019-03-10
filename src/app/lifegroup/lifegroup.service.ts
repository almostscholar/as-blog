import { MeetingRepository } from './meetings/meeting.repository';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meeting, MenuItem } from './meetings/meeting.component.model';

@Injectable()
export class LifegroupService {
  constructor(private meetingRepository: MeetingRepository) {}

  public getCurrentMeeting(): Observable<Meeting> {
    return this.meetingRepository.findCurrentMeeting();
  }

  public getFamilyNames(): Observable<string[]> {
    const familyNames: string[] = [];
    const namesObservable = of(familyNames);
    this.meetingRepository.findAllFamilyMembers().subscribe(families => {
      familyNames.push(...families.map(family => family.name));
    });
    return namesObservable;
  }

  public addMenuItem(menuItem: MenuItem): Observable<number> {
    return this.meetingRepository.addMenuItem(menuItem);
  }

  deleteMenuItem(id: number): Observable<any> {
    return this.meetingRepository.deleteMenuItem(id);
  }
}
