import {Excel} from '@/components/excel/Excel';

export class Formula extends Excel {
  static className = 'excel__formula';

  toHTML() {
    return '<h1>Formula</h1>';
  }
}
