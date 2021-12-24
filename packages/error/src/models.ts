export interface errorModel {
    type: string
    errorType:string
    pageUrl: string
    sourceUrl:string 
    duration?: number //加载耗时
    time: number
    msg:string
}

export interface resourceModel {
    resourcetype: string
    size:number
    sourceUrl:string 
    duration: number //加载耗时
    time: number
}
