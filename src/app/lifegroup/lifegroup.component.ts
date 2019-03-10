import { LifegroupService } from './lifegroup.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Meeting, MenuItem } from './meetings/meeting.component.model';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-lifegroup',
  templateUrl: './lifegroup.component.html',
  styleUrls: ['./lifegroup.component.css']
})
export class LifegroupComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) matTable: MatTable<MenuItem>;
  meeting: Meeting;
  familyNames: string[];
  displayedColumns = ['family', 'item', 'delete'];
  familyName: string;
  itemName: string;
  familyNamesSubscription: Subscription;

  constructor(private lifegroupService: LifegroupService) { }

  ngOnInit() {
    this.lifegroupService.getCurrentMeeting().pipe(first()).subscribe((meeting) => {
      this.meeting = meeting;
    });

    this.familyNamesSubscription = this.lifegroupService.getFamilyNames().subscribe((names) => {
      this.familyNames = names;
    });
  }

  ngOnDestroy(): void {
    if (this.familyNamesSubscription) {
      this.familyNamesSubscription.unsubscribe();
    }
  }

  addNewMenuItem() {
    if (this.familyName && this.itemName) {
      const menuItem: MenuItem = {
        id: null,
        familyName: this.familyName,
        name: this.itemName
      };

      this.lifegroupService.addMenuItem(menuItem).pipe(first()).subscribe((id) => {
        menuItem.id = id;
        this.meeting.menuItems.push(menuItem);
        this.matTable.renderRows();
      });

      this.familyName = '';
      this.itemName = '';
    } else {
      console.log('ignored attempt to add invalid menu item');
    }
  }

  deleteMenuItem(id: number) {
    if (id) {
      this.lifegroupService.deleteMenuItem(id).pipe(first()).subscribe(() => {
        const filteredMenuItems: MenuItem[] = this.meeting.menuItems.filter(item => item.id !== id);
        this.meeting.menuItems = filteredMenuItems;
        this.matTable.renderRows();
      });
    }
  }
}
