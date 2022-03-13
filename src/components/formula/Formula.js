import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,
    });
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
    const text = event.target.textContent.trim();
    this.emitter.emit('input', text);
  }
}
