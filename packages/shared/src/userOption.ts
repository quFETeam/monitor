import { optionModel } from './models';

class UserOption {
  private static instance:UserOption;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new UserOption();
    }
    return this.instance;
  }

  private op = {};

  public set(option: optionModel) {
    this.op = option;
  }

  public get() {
    return this.op;
  }
}

export const userOption = UserOption.getInstance();
