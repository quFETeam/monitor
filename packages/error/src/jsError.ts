/**
 * @description: 收集js异常
 * @param {*}
 * @return {*}
 */
export function getWindowsError(): void {
  window.onerror = (msg, url, row, col, error) => {
    console.log(error.stack);
    console.log(error instanceof TypeError);
    // type: 'javascript'
    console.log(`row:${row}`);// 发生错误时的代码行数
    console.log(`col:${col}`);// 发生错误时的代码列数
    console.log(`error:${error && error.stack ? error.stack : msg}`);// 错误信息
    console.log(`url:${url}`);// 错误文件
    console.log('所有的onerror错误信息');
  };
}
/**
 * @description: 捕获promise异常
 * @param {*}
 * @return {*}
 */
export function getPromiseError():void {
  addEventListener('unhandledrejection', (e) => {
    // type: 'promise'
    console.log(e);
    console.log(e.reason instanceof ReferenceError);
    console.log(`msg:${(e.reason && e.reason.msg) || e.reason || ''}`);
    console.log('所有的promise错误信息');
  });
}

// function parseError() {

// }
