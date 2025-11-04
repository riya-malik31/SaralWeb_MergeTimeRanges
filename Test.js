const { MergeTimeRanges } = require('./MergeTimeRanges');

const testCases = [
  {
    input: {
      ranges: [
        [1, 6],
        [3, 9],
        [10, 12],
        [13, 15]
      ],
      threshold: 2
    },
    expected: [[1, 15]]
  },
  {
    input: {
      ranges: [
        [1, 3],
        [5, 6],
        [7, 10]
      ],
      threshold: 1
    },
    expected: [
      [1, 3],
      [5, 10]
    ]
  },
  {
    input: {
      ranges: [
        [10, 20],
        [25, 30],
        [30, 40]
      ],
      threshold: 5
    },
    expected: [
      [10, 40]
    ]
  }
];

testCases.forEach((test, index) => {
  const result = MergeTimeRanges(test.input.ranges, test.input.threshold);
  console.log(`Test #${index + 1}`);
  console.log("Output:  ", JSON.stringify(result));
  console.log("Expected:", JSON.stringify(test.expected));
  console.log("✅ Pass:", JSON.stringify(result) === JSON.stringify(test.expected));
  console.log("------------------------------------------------");
});
