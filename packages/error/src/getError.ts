import { userOption } from '@monitor/shared';
import {
  getResources, getSourceError,
} from './resourcesError';
import { getWindowsError, getPromiseError } from './jsError';
import { getHttpError } from './xhrError';
import { getFetchError } from './fetchError';

export function getError() {
  console.log('error');
  const option = userOption.get();
  console.log('option', option);
  getResources();
  getWindowsError();
  getSourceError();
  getPromiseError();
  getHttpError();
  getFetchError();
}
