export function getError(){
    console.log('error')
    getWindowsError()
    getSourceError()
    getPromiseError()
}

/**
 * @description: 监听js错误
 * @param {*}
 * @return {*}
 */
function getWindowsError(): void{
    window.onerror = function(msg, url, row, col, error) {
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
function getSourceError(): void{
    window.addEventListener('error', e => {
        const target = e.target
        console.log(e)
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
function getPromiseError():void{
    addEventListener('unhandledrejection', e => {
        //type: 'promise'
        console.log(`msg:${(e.reason && e.reason.msg) || e.reason || ''}`)
        console.log('所有的promise错误信息')
    })
}