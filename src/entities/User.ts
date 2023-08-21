export class User {
  constructor(
    private readonly username: string,
    private readonly avatar: string,
  ) {}
  getUsername() {
    return this.username;
  }
  getAvatar() {
    return this.avatar;
  }
  is(username: string) {
    return this.username === username;
  }
}
