import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {
  @Input() categoryId: number;
  @Input() nextPostId: number;
  @Output() newPostSender = new EventEmitter();

  submitForm(title: string, author: string, content: string, imageURL: string) {
    var newPostToAdd: Post = new Post(this.nextPostId, title, author, content, imageURL, this.categoryId);
    this.newPostSender.emit(newPostToAdd);
    console.log(newPostToAdd);
  }
}
