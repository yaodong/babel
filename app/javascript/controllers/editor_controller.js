import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["editor"]

  connect() {
    console.log(this.editorTarget);
  }
}
