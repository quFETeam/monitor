export function getFetchError() {
  console.log('getFetchError');
  errorFetchInit();
}

// fetch的处理
function errorFetchInit() {
  if (!window.fetch) return;
  const oldFetch = window.fetch;
  window.fetch = (...argus) => oldFetch.apply(this, argus)
    .then((res) => {
      console.log('FetchInit', res);
      if (!res.ok) { // 当status不为2XX的时候，上报错误
      } else {
        // body: ReadableStream
        // bodyUsed: false
        // headers: Headers {}
        // ok: false
        // redirected: false
        // status: 404
        // statusText: "Not Found"
        // type: "basic"
        // url: "http://127.0.0.1:5500/packages/monitor/examples/a.html"
      }
      return res;
    })
    // 当fetch方法错误时上报
    .catch((error) => {
      console.log('errorFetchInit', argus);
      console.log('errorFetchInit', error);
      console.log('errorFetchInit', error.message);
      console.log('errorFetchInit', error.stack);
      console.log('errorFetchInit', error.status);
      // error.message,
      // error.stack
      // 抛出错误并且上报
      // throw error;
    });
}
