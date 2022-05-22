import {Page} from '@core/Page';
import {$} from '@core/Dom';

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'dashboard').html(
        `
        <div class="container">
          <div class="dashboard">
            <div class="dashboard__header">
              <h1>Excel dashboard</h1>
            </div>
        
            <div class="dashboard__create">
              <div class="dashboard__create__wrap">
                <a href="#" class="dashboard__create__wrap__link">New sheet</a>
              </div>
            </div>
        
            <div class="dashboard__table">
              <div class="dashboard__table__list-header">
                <span>Name</span>
                <span>Opening date</span>
              </div>
        
              <ul class="dashboard__table__list">
                <li class="dashboard__table__list__item">
                  <a href="#">table 1</a>
                  <strong>02.12.2021</strong>
                </li>
                <li class="dashboard__table__list__item">
                  <a href="#">table 2</a>
                  <strong>02.12.2021</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        `
    );
  }
}
