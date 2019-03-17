import { BlogRoutingModule } from './blog/blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { LifegroupComponent } from './lifegroup/lifegroup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: () => BlogRoutingModule,
    pathMatch: 'full'
  }, {
    path: 'lifegroup',
    component: LifegroupComponent,
    pathMatch: 'full'
  }, {
    path: '',
    redirectTo: 'lifegroup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
