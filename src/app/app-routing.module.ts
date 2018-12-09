import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { ResourcesComponent } from './resources/resources.component';
import { ArchiveComponent } from './archive/archive.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'archive',
    component: ArchiveComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'miscellaneous',
    component: MiscellaneousComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
