import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService, PostService]
})

export class CategoryDetailComponent implements OnInit {
  categoryId: number;
  categoryToDisplay: Category;
  posts: Post[];
  nextPostId: number;
  showForm: boolean = false;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService,
    private postService: PostService
    ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
    this.posts = this.postService.getPostsByCategoryId(this.categoryId);
    this.nextPostId = this.postService.getNextId();
    this.title = this.categoryToDisplay.name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  clickNewPost() {
    this.showForm = true;
  }

  addPost(newPost: Post) {
    this.postService.addPost(newPost);
    this.showForm = false;
  }

  showBody(post: Post) {
    if (post.detailsShown) {
      post.detailsShown = false;
    } else {
      this.posts.forEach(function(e) {
        e.detailsShown = false;
      });
      post.detailsShown = true;
    }
  }
}
