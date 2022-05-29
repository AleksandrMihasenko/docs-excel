function toHTML() {
  return `
    <li class="dashboard__table__list__item">
      <a href="#">table 1</a>
      <strong>02.12.2021</strong>
    </li>
  `;
}

function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) {
      continue;
    }
    keys.push(key);
  }

  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();

  if (!keys.length) {
    return '<p>No one record yet.</p>';
  }

  return `
    <div class="dashboard__table__list-header">
      <span>Name</span>
      <span>Opening date</span>
    </div>

    <ul class="dashboard__table__list">
      ${ keys.map(toHTML).join('') }
    </ul>
  `;
}
