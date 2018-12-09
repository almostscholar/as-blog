import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Almost Scholarly';

  tabs = [
    {
      label: 'About',
      path: '/about'
    }, {
      label: 'Blog',
      path: '/blog'
    }, {
      label: 'Resources',
      path: '/resources'
    }, {
      label: 'Archive',
      path: '/archive'
    }, {
      label: 'Contact',
      path: '/contact'
    }, {
      label: 'Miscellaneous',
      path: '/miscellaneous'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('blog');
  }
}
