import {Excel} from '@/components/excel/Excel';

export class Header extends Excel {
  static className = 'excel__header';

  toHTML() {
    return `
      <input type="text" value="New sheet" class="excel__header__input">

      <div class="excel__header__buttons">
        <div class="excel__header__buttons__button">
          <i class="material-icons">delete</i>
        </div>

        <div class="excel__header__buttons__button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
    `;
  }
}
