/**
 * @description: 捕获资源加载失败错误 js css img
 *               加载异常无法被onerror捕获
 * @param {*}
 * @return {*}
 */
export function getSourceError(): void {
  addEventListener('error', (e) => {
    const { target } = e;
    console.log(e);
    console.log(e.error instanceof ReferenceError);
    if (target !== window) {
      console.log(`type:${(target as any).localName}`);
      console.log(`url:${(target as any).src || (target as any).href}`);
      console.log('所有的ListenerError错误信息');
    }
  }, true);
}

/**
 * @description: 获取资源信息，上报资源加载时间，收集加载超时异常
 * @param {*}
 * @return {*}
 */
export function getResources():void {
  if (!window.performance) return;
  // 加载页面时加载的资源
  const entries = window.performance.getEntriesByType('resource');
  // console.log(entries)
  parsePerformanceEntries(entries);
  // 监听后续加载资源
  const observerResource = new PerformanceObserver((list) => {
    const resourceEntries = list.getEntries();
    // console.log(list.getEntries())
    parsePerformanceEntries(resourceEntries);
  });
  observerResource.observe({
    entryTypes: ['resource'],
  });
}

/**
 * @description: 处理资源列表
 * @param {*}
 * @return {*}
 */
function parsePerformanceEntries(entries):void {
  if (!entries || !entries.length) return;
  entries.forEach((item) => {
    console.log(item);
    console.log(item.duration.toFixed(2)); // 资源加载耗时
    console.log(item.name);
    console.log(item.transferSize); // 资源大小
    console.log(item.nextHopProtocol); // 资源所用协议
  });
}
