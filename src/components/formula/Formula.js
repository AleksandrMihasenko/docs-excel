import {$} from '@core/Dom';
import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      ...options,
    });
  }

  static className = 'excel__formula';

  toHTML() {
    return `
      <div class="excel__formula__info">Fx</div>
      <div 
        id="formula"
        class="excel__formula__input"
        contenteditable="true"
        spellcheck="false">
      </div>
    `;
  }

  init() {
    super.init();
    this.$formula = this.$root.find('#formula');

    this.$on('table:select', ($cell) => {
      this.$formula.text($cell.text());
    });
  }

  storeChanged({ currentText }) {
    this.$formula.text(currentText);
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(event.key)) {
      event.preventDefault();

      this.$emit('formula:done');
    }
  }
}
