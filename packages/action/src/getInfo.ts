import {
  getUuid, getDateUuidKey, uuidKey, superStorage,
} from '@monitor/shared';

export function getActionInfo() {
  const ua = window.navigator;
  console.log(ua);
  const d = new Date();
  const todayUuid = getTodayUuid(d);
  console.log(`今日uuid:${todayUuid}`);
  getMainUuid();
  // 用户UA
  const { userAgent } = ua;
  console.log(`用户UA:${userAgent}`);
  const screen = getScreen();
  console.log(`screen:${screen}`);
  console.log(`referrer:${document.referrer}`);
  console.log(`页面地址:${location.href}`);
}

/**
 * @description: 获取每天uuid用来统计uv，每天会变
 * @param {*}
 * @return {string}
 */
function getTodayUuid(date: Date): string {
  // 获取日期key
  const dateUuidKey = getDateUuidKey(date);
  console.log(`日期key:${dateUuidKey}`);
  let dateUuid = superStorage.get(dateUuidKey);
  if (!dateUuid) {
    // 用户uuid
    dateUuid = getUuid();
    console.log(`用户uuid:${dateUuid}`);
    superStorage.set(dateUuidKey, dateUuid);
  }
  return dateUuid;
}

/**
 * @description: 获取uuid用户唯一uuid，永久不变
 * @param {*}
 * @return {string}
 */
function getMainUuid(): string {
  console.log(`用户uuidKey:${uuidKey}`);
  let uuid = superStorage.get(uuidKey);
  if (!uuid) {
    // 用户uuid
    uuid = getUuid();
    console.log(`用户不变uuid:${uuid}`);
    superStorage.set(uuidKey, uuid);
  }
  return uuidKey;
}
/**
 * @description: 获取分辨率
 * @param {*}
 * @return {string}
 */
function getScreen(): string {
  const { width } = screen;
  const { height } = screen;
  return `${width}*${height}`;
}
