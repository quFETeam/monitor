export function getPerformanceInfo(){
    let performance = window.performance
    let timing = performance.timing
    console.log(timing)
    setTimeout(()=>{
        //页面加载耗时
        let loadTime = timing.loadEventEnd - timing.navigationStart
        console.log(`页面加载耗时:${loadTime}`)
        // DOM 渲染耗时
        let domTime = timing.domComplete - timing.domLoading
        console.log(`DOM渲染耗时:${domTime}`)
        // 请求耗时
        let requestTime = timing.responseEnd - timing.requestStart
        console.log(`请求耗时:${requestTime}`)
        //准备新页面耗时
        let readyStart = timing.fetchStart - timing.navigationStart;
        console.log(`准备新页面耗时:${readyStart}`)
        //重定向耗时
        let redirectTime = timing.redirectEnd  - timing.redirectStart;
        console.log(`重定向耗时:${redirectTime}`)
    },0)
} 