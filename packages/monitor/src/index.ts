import { getPerformanceInfo } from '@monitor/performance';
import { getActionInfo } from '@monitor/action';
import { getError } from '@monitor/error';
import { userOption } from '@monitor/shared';

export function init(option) {
  userOption.set(option);
  getActionInfo();
  getPerformanceInfo();
  getError();
}
// window.onload = () => {
//   init();
// };
