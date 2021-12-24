
/**
 * @description: request.status一直都是0 ，而 request.responseText也一直都为空,因为跨域问题
 * @param {*}
 * @return {*}
 */
export function getHttpError(){
    console.log('xhrError')
    // 监听ajax的状态
    function ajaxEventTrigger(event) {
        var ajaxEvent = new CustomEvent(event, {
          detail: this
        });
        window.dispatchEvent(ajaxEvent);
    }
    var oldXHR = window.XMLHttpRequest;
    function newXHR() {
        var realXHR = new oldXHR();
        realXHR.addEventListener('timeout', function () { ajaxEventTrigger.call(this, 'ajaxTimeout'); }, false);
        realXHR.addEventListener('error', function () { ajaxEventTrigger.call(this, 'ajaxError'); }, false);
        realXHR.addEventListener('loadstart', function () { ajaxEventTrigger.call(this, 'ajaxLoadStart'); }, false);
        realXHR.addEventListener('loadend', function () { ajaxEventTrigger.call(this, 'ajaxLoadEnd'); }, false);
        realXHR.addEventListener('readystatechange', function() { ajaxEventTrigger.call(this, 'ajaxReadyStateChange'); }, false);
        // 此处的捕获的异常会连日志接口也一起捕获，如果日志上报接口异常了，就会导致死循环了。
        // realXHR.onerror = function () {
        //   siftAndMakeUpMessage("Uncaught FetchError: Failed to ajax", WEB_LOCATION, 0, 0, {});
        // }
        return realXHR;
    }
    (window as any).XMLHttpRequest = newXHR;
    window.addEventListener('abort', e =>{
        console.log('abort',e)
    })
    window.addEventListener('ajaxTimeout', e =>{
        console.log('ajaxTimeout',e)
    })
    window.addEventListener('ajaxError', e =>{
        console.log('ajaxError',e)
    })
    window.addEventListener("ajaxReadyStateChange",function(e){
        console.log('ajaxReadyStateChange',e)
    });
    window.addEventListener('ajaxLoadStart', e => {
        console.log('ajaxLoadStart',e)
    })

    window.addEventListener('ajaxLoadEnd', e => {
        console.log('ajaxLoadEnd',e)
    })
}
