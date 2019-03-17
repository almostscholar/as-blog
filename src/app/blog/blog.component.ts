import { BlogService } from './blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
    }
  ];

  blogContents: string[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getMostRecentPost().subscribe((blogPost) => {
      this.blogContents = blogPost;
    });
  }

}
