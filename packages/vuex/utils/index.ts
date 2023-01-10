export const isObject = (val: any): val is object =>
  toString.call(val) === "[object Object]";
export const isString = <T = any>(str: string | T): str is string =>
  typeof str === "string";
export const partial =
  <T extends (...args: any[]) => any>(fn: T, ...partials: Array<any>) =>
  (...args: Array<any>): ReturnType<T> =>
    fn(...partials, ...args);
