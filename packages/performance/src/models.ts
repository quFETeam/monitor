export interface performanceModel {
    dnsTime: number // DNS 查询耗时
    appcacheTime:number // DNS 缓存时间
    tcpTime:number // tcp连接耗时
    requestTime: number // 请求耗时
    readyTime: number // 准备新页面耗时
    redirectTime: number // 重定向耗时
    domTime: number // DOM 渲染耗时
    loadTime: number // 页面加载耗时
    whiteTime: number // 白屏时间
    time: number
}
