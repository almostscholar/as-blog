import { BlogRoutingModule } from './blog/blog-routing.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifegroupComponent } from './lifegroup/lifegroup.component';

import { LifegroupService } from './lifegroup/lifegroup.service';
import { MeetingRepository } from './lifegroup/meetings/meeting.repository';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LifegroupComponent
  ],
  imports: [
    BlogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    LifegroupService,
    MeetingRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
