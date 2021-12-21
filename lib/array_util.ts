export default class ArrayUtil {

  /**
  * Returns an array with arrays of the given size.
  *
  * @param myArray {Array} Array to split
  * @param chunkSize {Integer} Size of every group
  */
  static chunkArray(myArray, chunk_size) {
    var results = [];
    let array = [...myArray]
    while (array.length) {
      results.push(array.splice(0, chunk_size));
    }
    return results;
  }
}