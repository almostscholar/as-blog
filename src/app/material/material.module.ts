import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
