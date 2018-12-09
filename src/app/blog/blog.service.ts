import { Observable } from 'rxjs';
import { BlogAdapterRepository } from './blog.adapter.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  constructor(private blogRepository: BlogAdapterRepository) { }

  getMostRecentPost(): Observable<any> {
    return this.blogRepository.getMostRecent();
  }

}
