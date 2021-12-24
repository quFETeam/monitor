/**
 * @description: 监听js错误
 * @param {*}
 * @return {*}
 */
 export function getWindowsError(): void{
    window.onerror = function(msg, url, row, col, error) {
        console.log(error.stack)
        console.log(error instanceof TypeError)
        //type: 'javascript'
        console.log(`row:${row}`)// 发生错误时的代码行数
        console.log(`col:${col}`)// 发生错误时的代码列数
        console.log(`error:${error && error.stack? error.stack : msg}`)// 错误信息
        console.log(`url:${url}`)// 错误文件
        console.log('所有的onerror错误信息')
    }
}
/**
 * @description: 捕获资源加载失败错误 js css img
 *               加载异常无法被onerror捕获
 * @param {*}
 * @return {*}
 */
 export function getSourceError(): void{
    addEventListener('error', e => {
        const target = e.target
        console.log(e)
        console.log(e.error instanceof ReferenceError)
        if (target != window) {   
            console.log(`type:${(target as any).localName}`)
            console.log(`url:${(target as any).src || (target as any).href}`)
            console.log('所有的ListenerError错误信息')
        }
    }, true)
}
/**
 * @description: 捕获promise异常
 * @param {*}
 * @return {*}
 */
 export function getPromiseError():void{
    addEventListener('unhandledrejection', e => {
        //type: 'promise'
        console.log(e)
        console.log(e.reason instanceof ReferenceError)
        console.log(`msg:${(e.reason && e.reason.msg) || e.reason || ''}`)
        console.log('所有的promise错误信息')
    })
}

/**
 * @description: 获取资源信息，上报资源加载时间，收集加载超时异常
 * @param {*}
 * @return {*}
 */
 export function getResources():void {
    if (!window.performance) return
    //加载页面时加载的资源
    const entries = window.performance.getEntriesByType('resource')
    // console.log(entries)
    parsePerformanceEntries(entries)
    //监听后续加载资源
    const observerPaint = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        // console.log(list.getEntries())
        parsePerformanceEntries(entries)
    })
    observerPaint.observe({
        entryTypes: ['resource']
    })
}

/**
 * @description: 处理资源列表
 * @param {*}
 * @return {*}
 */
function parsePerformanceEntries(entries):void{
    if(!entries||!entries.length)return
    entries.forEach(item => {
        console.log(item)
        console.log(item.duration.toFixed(2)) // 资源加载耗时
        console.log(item.name)
        console.log(item.transferSize) // 资源大小
        console.log(item.nextHopProtocol) // 资源所用协议
    });
}

function parseError(){

}