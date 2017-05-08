export class Post {
  constructor(public id: number,
              public title: string,
              public author: string,
              public content: string,
              public imageURL: string,
              public categoryId: number) { }
}
