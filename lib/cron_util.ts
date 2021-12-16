export default class CronUtil {
  /**
   * Gera a Cron para um horário diário
   * @param time Horário em formato HH:MM. Ex: 16:32
   * @returns Cron: minutes hour * * *
   */
  static dailySchedule(time: string) {
    const parts = time.split(':');
    const hour = Number(parts[0]);
    const minutes = Number(parts[1]);
    // Referência: https://crontab.cronhub.io/
    return `${minutes} ${hour} * * *`;
  }

  /**
   * Gera a Cron para um horário diário apenas nos dias úteis (segunda-sexta)
   * @param time Horário em formato HH:MM. Ex: 16:32
   * @returns Cron: minutes hour * * *
   */
  static weekDaysSchedule(time: string) {
    const parts = time.split(':');
    const hour = Number(parts[0]);
    const minutes = Number(parts[1]);
    return `${minutes} ${hour} * * MON-FRI`;
  }

  /**
   * Gera a Cron para intervalos de minutos
   * @param minutes Minutos
   * @returns Cron: *\/minutes * * * *`
   */
  static minutesSchedule(minutes: number) {
    return `*/${minutes} * * * *`;
  }

  /**
   * Gera a Cron para intervalos de horas
   * @param hours Horas
   * @returns Cron: 0 *\/hours * * *`
   */
  static hoursSchedule(hours: number) {
    return `0 */${hours} * * *`;
  }
}
