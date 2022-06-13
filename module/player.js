class Player {
  constructor() {
    this._username = "";
  }

  generateToken() {
    const random = ~~[Math.random() * 10000];
    const token = this.username + random.toString();
    return token;
  }

  // Setter Method

  set username(_username) {
    return (this._username = _username);
  }

  // Getter Method

  get username() {
    return this._username;
  }

  get register() {
    sessionStorage.setItem("token", this.generateToken());
    registForm.style.display = "none";
    logoutForm.style.display = "block";

    setTimeout(function () {
      location.href = "#start";
    }, 500);
  }

  get logout() {
    sessionStorage.removeItem("token");
    location.reload();
  }
}
