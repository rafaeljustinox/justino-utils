import { format, utcToZonedTime } from 'date-fns-tz';
const timezone = 'America/Sao_Paulo';

export default class DateUtil {
  static SECOND = 1000;
  static MINUTE = 60 * DateUtil.SECOND;
  static HOUR = 60 * DateUtil.MINUTE;
  static DAY = 24 * DateUtil.HOUR;
  static WEEK = 7 * DateUtil.DAY;

  static timeZonedDateNow(): Date {
    const brTime = utcToZonedTime(new Date(), timezone);
    return brTime;
  }

  /**
   *
   * @param dateString - Exemplo: 2013-09-23 00:00:00
   * @returns - Exemplo: 2013-09-23T00:00:00.000-03:00
   */
  static winthorDateToIsoWithTimezone(date: Date): string {
    const converted = format(date, 'yyyy-MM-dd HH:mm:ss');
    const formated = converted.split(' ').join('T') + '.000-03:00';
    return formated;
  }

  static timeZonedDate(date: Date): string {
    const brTime = utcToZonedTime(date, timezone);
    const converted = format(brTime, 'dd/MM/yyyy HH:mm:ss', {
      timeZone: timezone,
    });
    return converted;
  }

  static formatDate(date: Date, pattern: string): string {
    const brTime = utcToZonedTime(date, timezone);
    const converted = format(brTime, pattern, {
      timeZone: timezone,
    });
    return converted;
  }

  static onlyDateToSql(date: Date) {
    return `TO_DATE('${DateUtil.timeZonedDate(date)}', 'dd/mm/yyyy')`;
  }

  static dateToSql(date: Date) {
    if (!date) {
      return null;
    }
    try {
      return `TO_DATE('${DateUtil.timeZonedDate(
        date
      )}', 'dd/mm/yyyy HH24:MI:SS')`;
    } catch (error) {
      const dataSimplesString = DateUtil.simpleDate(date);
      return `TO_DATE('${dataSimplesString}', 'dd/mm/yyyy HH24:MI:SS')`;
    }
  }

  static dateNowFormatted() {
    const date: Date = new Date();
    return DateUtil.timeZonedDate(date);
  }

  static simpleDate(date: Date): string {
    const converted = format(date, 'dd/MM/yyyy HH:mm:ss');
    return converted;
  }

  static dateNow(): Date {
    return new Date();
  }

  static getHoursAndMinutes(date: Date) {
    if (date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return { hours, minutes };
    }
  }

  /**
   *
   * @param dateString Data no formato 2021-12-31
   */
  static simpleDateStringToDate(
    dateString: string,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0
  ) {
    if (!dateString) return null;
    const parts = dateString.split('-');
    const year = +parts[0];
    const month = +parts[1] - 1;
    const day = +parts[2];
    const date = new Date(year, month, day, hours, minutes, seconds);
    return date;
  }

  static extractDateRangeFromQueryParam(dateParam: string): {
    inicial: Date;
    final: Date;
  } {
    const datas = dateParam.split('|');
    if (datas.length == 2) {
      const dtInicialString = datas[0]; // 00h00m00s
      const dtFinalString = datas[1]; // 23h59m59s

      const dtInicial = DateUtil.simpleDateStringToDate(dtInicialString);
      const dtFinal = DateUtil.simpleDateStringToDate(
        dtFinalString,
        23,
        59,
        59
      );
      return {
        inicial: dtInicial,
        final: dtFinal,
      };
    } else {
      return null;
    }
  }
}
