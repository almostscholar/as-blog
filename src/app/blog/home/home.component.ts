import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogContents: string[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getMostRecentPost().subscribe((blogPost) => {
      this.blogContents = blogPost;
    });
  }

}
