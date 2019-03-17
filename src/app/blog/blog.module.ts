import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../blog/about/about.component';
import { BlogComponent } from './blog.component';
import { ContactComponent } from '../blog/contact/contact.component';
import { ResourcesComponent } from '../blog/resources/resources.component';
import { ArchiveComponent } from '../blog/archive/archive.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';
import { BlogAdapterRepository } from './blog.adapter.repository';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ResourcesComponent,
    ArchiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    BlogRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    BlogService,
    BlogAdapterRepository
  ],
  bootstrap: [HomeComponent]
})
export class BlogModule { }
