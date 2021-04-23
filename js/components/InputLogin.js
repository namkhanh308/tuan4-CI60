const $template = document.createElement("template");
$template.innerHTML = `
<div class="input-login">
        <input class="main-login" type="text" placeholder="" />
        <div class="login-error"></div>
</div>
`;

export default class InputLogin extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$mainLogin = this.querySelector(".main-login");
    this.$loginError = this.querySelector(".login-error");
  }
  static get observedAttributes() {
    return ["placeholder", "error", "type"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "placeholder") {
      this.$mainLogin.placeholder = newValue;
    } else if (attrName == "error") {
      this.$loginError.innerHTML = newValue;
    } else if (attrName == "type") {
      this.$mainLogin.type = newValue;
    }
  }
  validate(condition, error) {
    let value = this.$mainLogin.value;
    if (condition(value)) {
      this.setAttribute("error", "");
      return false;
    } else {
      this.setAttribute("error", error);
      return true;
    }
  }
  get value() {
    return this.$mainLogin.value;
  }
}
window.customElements.define("input-login", InputLogin);
