export class Model {
  user;
  items;

  constructor() {
    this.user = 'Furkan';
    this.items = [
      new TodoItem('Spor', true),
      new TodoItem('Sinema', false),
      new TodoItem('Kitap', false),
      new TodoItem('Yürüyüş', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
