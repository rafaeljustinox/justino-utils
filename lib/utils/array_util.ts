export default class ArrayUtil {

  /**
  * Returns an array with arrays of the given size.
  *
  * @param myArray {Array} Array to split
  * @param chunkSize {Integer} Size of every group
  */
  static chunkArray(myArray, chunk_size) {
    var results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }
}