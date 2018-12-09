import { BlogService } from './blog/blog.service';
import { BlogAdapterRepository } from './blog/blog.adapter.repository';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { ArchiveComponent } from './archive/archive.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ResourcesComponent,
    ArchiveComponent,
    MiscellaneousComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BlogService,
    BlogAdapterRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
