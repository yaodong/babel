import { Controller } from "stimulus"
import CodeMirror from "codemirror"

export default class extends Controller {
  static targets = ["text"]

  connect() {
    this.editor = CodeMirror.fromTextArea(this.textTarget, {
      lineNumbers: true,
      theme: 'zenburn'
    });
  }

  highlight(event) {
    const selection = { from: this.editor.getCursor(true), to: this.editor.getCursor(false) }
    this.editor.getDoc().markText(selection.from, selection.to, {
      className: 'mark-highlight'
    })
  }
}
