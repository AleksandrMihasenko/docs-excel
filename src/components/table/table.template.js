const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `
    <div class="excel__table__row__data__cell" contenteditable></div>
  `;
}

function toColumn(col) {
  return `
    <div class="excel__table__row__data__column">
      ${col}
      <div class="col-resize"></div>
    </div>
  `;
}

function createRow(index, content) {
  const resize = index ? `<div class="row-resize"></div>` : '';

  return `
    <div class="excel__table__row">
      <div class="excel__table__row__info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="excel__table__row__data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}