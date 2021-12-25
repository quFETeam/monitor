import { commonModel } from '@monitor/shared';

export interface errorModel extends commonModel{
    type: string
    errorType:string
    pageUrl: string
    sourceUrl:string
    duration?: number // 加载耗时
    time: number
    msg:string
}

export interface resourceModel extends commonModel{
    resourcetype: string
    size:number
    sourceUrl:string
    duration: number // 加载耗时
    time: number
}
