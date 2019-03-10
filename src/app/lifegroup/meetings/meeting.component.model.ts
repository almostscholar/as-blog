export class Meeting {
  locationName: string;
  meetingDate: Date;
  isComplete: boolean;
  menuItems: MenuItem[];
}

export class MenuItem {
  id: number;
  familyName: string;
  name: string;
}
