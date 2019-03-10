import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { ResourcesComponent } from './resources/resources.component';
import { ArchiveComponent } from './archive/archive.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { LifegroupComponent } from './lifegroup/lifegroup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  }, {
    path: 'blog',
    component: BlogComponent,
    pathMatch: 'full'
  }, {
    path: 'resources',
    component: ResourcesComponent,
    pathMatch: 'full'
  }, {
    path: 'archive',
    component: ArchiveComponent,
    pathMatch: 'full'
  }, {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  }, {
    path: 'lifegroup',
    component: LifegroupComponent,
    pathMatch: 'full'
  }, {
    path: 'miscellaneous',
    component: MiscellaneousComponent,
    pathMatch: 'full'
  }, {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
