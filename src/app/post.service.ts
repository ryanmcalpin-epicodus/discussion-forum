import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPostsByCategoryId(categoryId: number) {
    var posts: Post[] = [];

    for(var i = 0; i <= POSTS.length - 1; i++) {
      if(POSTS[i].categoryId === categoryId) {
        posts.push(POSTS[i]);
      }
    }

    return posts;
  }

  getPostById(postId: number) {
    for(var i = 0; i <= POSTS.length - 1; i++) {
      if(POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }

}
