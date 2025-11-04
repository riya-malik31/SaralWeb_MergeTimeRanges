/**
 * @param {Array<Array<number>>} ranges 
 * @param {number} threshold 
 * @returns {Array<Array<number>>}
 */

function MergeTimeRanges(ranges, threshold = 0) {
  if (!ranges || ranges.length === 0) return [];

  ranges.sort((a, b) => a[0] - b[0]);

  const result = [];
  let [currentStart, currentEnd] = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    const [nextStart, nextEnd] = ranges[i];

    // Check overlap or gap <= threshold
    if (nextStart <= currentEnd || nextStart - currentEnd < threshold) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      result.push([currentStart, currentEnd]);
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }
  result.push([currentStart, currentEnd]);

  return result;
}

module.exports = { MergeTimeRanges };
