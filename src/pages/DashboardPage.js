import {Page} from '@core/Page';
import {$} from '@core/Dom';
import {createRecordsTable} from './dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();

    return $.create('div', 'dashboard').html(`
      <div class="container">
        <div class="dashboard">
          <div class="dashboard__header">
            <h1>Excel dashboard</h1>
          </div>
      
          <div class="dashboard__create">
            <div class="dashboard__create__wrap">
              <a href="#excel/${now}" class="dashboard__create__wrap__link">
                New sheet
              </a>
            </div>
          </div>
      
          <div class="dashboard__table">
            ${ createRecordsTable() }
          </div>
        </div>
      </div>
      `
    );
  }
}
