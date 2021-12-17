import {Excel} from '@/components/excel/Excel';

export class Toolbar extends Excel {
  static className = 'excel__toolbar';

  toHTML() {
    return '<h1>Toolbar</h1>';
  }
}
