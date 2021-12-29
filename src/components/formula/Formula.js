import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, { name: 'Formula', listeners: ['input', 'click'] });
  }

  static className = 'excel__formula';

  toHTML() {
    return `
      <div class="excel__formula__info">Fx</div>
      <div 
        class="excel__formula__input"
        contenteditable="true"
        spellcheck="false">
      </div>
    `;
  }

  onInput(event) {
    console.log('onInput formula', event.target.textContent.trim());
  }

  onClick(event) {
    console.log('onClick formula');
  }
}
