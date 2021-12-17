import {Excel} from '@/components/excel/Excel';

export class Table extends Excel {
  static className = 'excel__table';

  toHTML() {
    return '<h1>Table</h1>';
  }
}
