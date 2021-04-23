const $template = document.createElement("template");
$template.innerHTML = `<form class="login-form">
        <h1 class="login-title">Login to your account</h1>
        <div class="caption">We are different, We Make You different</div>
        <input-login class="email" placeholder="Email" type="email"></input-login>
        <input-login class="password" placeholder="Password" type="password"></input-login>
        <button class="button-login">Login</button>
</form>`;
export default class FormLogin extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$loginForm = this.querySelector(".login-form");
    this.$email = this.querySelector(".email");
    this.$password = this.querySelector(".password");
  }
  connectedCallback() {
    this.$loginForm.onsubmit = (event) => {
      event.preventDefault();
      console.log("Dang nhap thanh cong");
      let isPassed =
        this.$email.validate((value) => {
          return value != "";
        }, "sai tai khoan") &
        this.$password.validate((value) => {
          return value != "";
        }, "sai mat khau");

      let a = {
        account: this.$email.value,
        password: this.$password.value,
      };
      if (isPassed == 0) {
        console.log(a);
      }
    };
  }
}
window.customElements.define("form-login", FormLogin);
