import {Router} from '@core/routes/router';
import {DashboardPage} from '@/pages/DashboardPage';
import {ExcelPage} from '@/pages/ExcelPage';

import './stylesheets/index.sass';


new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage,
});
