export default class StringUtil {
  static capitalize(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
}
