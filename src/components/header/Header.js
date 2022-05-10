import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/Dom';
import {changeTitle} from '@/redux/actions';
import {DEFAULT_TITLE} from '../../constants';


export class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  toHTML() {
    const title = this.store.getState().title || DEFAULT_TITLE;

    return `
      <input type="text" value="${title}" class="excel__header__input">

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

  onInput(event) {
    const $target = $(event.target);

    this.$dispatch(changeTitle($target.text()));
  }
}
