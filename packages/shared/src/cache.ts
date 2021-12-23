const PREFIX_DATE_UUID = 'date_uuid_'
const PREFIX_UUID = 'uuid_'
export const getDateUuidKey = (date: Date) : string=>`${PREFIX_DATE_UUID}${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
export const uuidKey = `${PREFIX_UUID}key`