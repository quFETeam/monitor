import { isNotExist } from '.';

interface storageData {
    value: unknown
    writeTime: number
    expired?: number
}
class LocalStorage {
  private static instance:LocalStorage;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new LocalStorage();
    }
    return this.instance;
  }

  public get(key) {
    const dataJSON = localStorage.getItem(key);
    // 当目标不存在时直接结束
    if (isNotExist(dataJSON)) {
      return null;
    }
    const data = JSON.parse(dataJSON);
    // 当数据的存在周期未定义时，它被认为是永久的
    if (isNotExist(data.expired)) {
      return data.value;
    }
    // 数据声明期结束时释放数据
    if (this.isExpired(data)) {
      this.del(key);
      return null;
    }
    return data.value;
  }

  public set(key, value, expired?) {
    const data:storageData = {
      value,
      writeTime: Number(new Date()), // 写入时间
      expired,
    };
    // 值是数组，不能直接存储，需要转换 JSON.stringify
    localStorage.setItem(key, JSON.stringify(data));
  }

  public del(key) {
    localStorage.removeItem(key);
  }

  // 判读是否过期
  private isExpired(value: storageData) {
    if (!value.value) {
      return true;
    }
    const readTime = Number(new Date());
    return (readTime - value.writeTime) > value.expired;
  }
}
export const superStorage = LocalStorage.getInstance();
