import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
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
}
