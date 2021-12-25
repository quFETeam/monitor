import { commonModel } from '@monitor/shared';

export interface actionModel extends commonModel{
    uuid: string
    todayUuid:string
    ua: string
    time: number
    screen: string
    referrer?:string
    pageUrl:string
}
