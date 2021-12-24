import {getResources,getWindowsError,getSourceError,getPromiseError} from './resourcesError'
import {getHttpError} from './xhrError'
export function getError(){
    console.log('error')
    getResources()
    getWindowsError()
    getSourceError()
    getPromiseError()
    getHttpError()
}
