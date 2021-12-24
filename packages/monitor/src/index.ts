import { getPerformanceInfo } from '@monitor/performance';
import { getActionInfo } from '@monitor/action';
import { getError } from '@monitor/error';

function init() {
  getActionInfo();
  getPerformanceInfo();
  getError();
}
window.onload = () => {
  init();
};
