export class Post {
  public detailsShown: boolean = false;
  constructor(public id: number,
              public title: string,
              public author: string,
              public content: string,
              public imageURL: string,
              public categoryId: number) { }
}
