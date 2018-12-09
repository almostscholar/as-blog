import { BlogService } from './blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogContents: string[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getMostRecentPost().subscribe((blogPost) => {
      this.blogContents = blogPost;
    });
  }

}
