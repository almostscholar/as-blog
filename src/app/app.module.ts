import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { ArchiveComponent } from './archive/archive.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { LifegroupComponent } from './lifegroup/lifegroup.component';

import { BlogService } from './blog/blog.service';
import { LifegroupService } from './lifegroup/lifegroup.service';
import { BlogAdapterRepository } from './blog/blog.adapter.repository';
import { MeetingRepository } from './lifegroup/meetings/meeting.repository';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ResourcesComponent,
    ArchiveComponent,
    MiscellaneousComponent,
    LifegroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BlogService,
    BlogAdapterRepository,
    LifegroupService,
    MeetingRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
