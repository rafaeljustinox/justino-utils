import DateUtil from './date_util';

export default class Logger {
  static log(...data: any[]): void {
    console.log(`${DateUtil.dateNowFormatted()}`, ...data);
  }
  static error(...data: any[]): void {
    console.error(`${DateUtil.dateNowFormatted()}`, ...data);
  }
  static info(...data: any[]): void {
    console.info(`${DateUtil.dateNowFormatted()}`, ...data);
  }
}
