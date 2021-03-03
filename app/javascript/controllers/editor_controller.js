import { Controller } from "stimulus"
import CodeMirror from "codemirror"

export default class extends Controller {
  static targets = ["editor"]

  connect() {
    const editor = CodeMirror.fromTextArea(this.editorTarget, {
      lineNumbers: true,
      theme: 'zenburn'
    });
    console.log(editor)
  }
}
