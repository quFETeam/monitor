import { getPerformanceInfo } from '@monitor/performance';
import { getActionInfo } from '@monitor/action';
import { getError } from '@monitor/error';
import { userOption, optionModel } from '@monitor/shared';

export function init(option: optionModel) {
  userOption.set(option);
  getActionInfo();
  getPerformanceInfo();
  getError();
}
// window.onload = () => {
//   init();
// };
