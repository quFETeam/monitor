import {
  getResources, getSourceError,
} from './resourcesError';
import { getWindowsError, getPromiseError } from './jsError';
import { getHttpError } from './xhrError';
import { getFetchError } from './fetchError';

export function getError() {
  console.log('error');
  getResources();
  getWindowsError();
  getSourceError();
  getPromiseError();
  getHttpError();
  getFetchError();
}
