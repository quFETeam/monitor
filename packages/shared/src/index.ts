export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'
export const extend = Object.assign;
export const isNotExist = (val: unknown): boolean => 
  val === null || typeof val === 'undefined'
export {
    superStorage
} from './localStorage' 