<template>
  <div>
    <h1>Part 1 of Test</h1>

    Initial array is: {{ arrayOfNumbers }}
    <p>Is consecutive array: {{ analyzeArray().isConsecutive }}</p>
    <p>
      Sort array with unique value:
      {{ analyzeArray().uniqueSorted }}
    </p>
    <p>
      Counts of element witch dublicate:
      {{ analyzeArray().duplicateCounts }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PartFirstTest',
  data() {
    return {
      arrayOfNumbers: [1, 3, 2, 2, 4, 3, 5, 6, 5]
    };
  },
  methods: {
    // Helper function to count duplicates in an array
    countDuplicates(array) {
      const counts = {};
      for (const num of array) {
        counts[num] = (counts[num] || 0) + 1;
      }
      return counts;
    },
    // Helper function to get unique elements in an array
    uniqueElements(array) {
      const uniqueArray = [];
      for (const num of array) {
        if (!uniqueArray.includes(num)) {
          uniqueArray.push(num);
        }
      }
      return uniqueArray;
    },
    analyzeArray() {
      // If the array has 0 or 1 elements, it can't be considered consecutive
      if (this.arrayOfNumbers.length <= 1) {
        return {
          isConsecutive: false,
          uniqueSorted: [],
          duplicateCounts: {} // Initialize the duplicateCounts property as an empty object
        };
      }

      // Create a sorted copy of the input array
      const sortedArray = [...this.arrayOfNumbers].sort((a, b) => a - b);

      // Find the minimum and maximum values in the sorted array
      const min = sortedArray[0];
      const max = sortedArray[this.arrayOfNumbers.length - 1];

      // Check if the difference between the maximum and minimum values is equal to the expected range
      if (max - min !== this.arrayOfNumbers.length - 1) {
        // Calculate a unique sorted array and return the result along with duplicate counts
        const uniqueSorted = this.uniqueElements(sortedArray); // Use a helper function to unique elements
        const duplicateCounts = this.countDuplicates(this.arrayOfNumbers); // Use a helper function to count duplicates
        return {
          isConsecutive: false,
          uniqueSorted,
          duplicateCounts
        };
      }

      // Iterate through the sorted array and check if each element is one greater than the previous element
      for (let i = 1; i < this.arrayOfNumbers.length; i++) {
        if (sortedArray[i] !== sortedArray[i - 1] + 1) {
          const uniqueSorted = this.uniqueElements(sortedArray);
          const duplicateCounts = this.countDuplicates(this.arrayOfNumbers);

          return {
            isConsecutive: false,
            uniqueSorted,
            duplicateCounts
          };
        }
      }

      // If all conditions are met, the array contains consecutive numbers
      return {
        isConsecutive: true,
        uniqueSorted: this.uniqueElements(sortedArray),
        duplicateCounts: this.countDuplicates(this.arrayOfNumbers)
      };
    }
  }
};
</script>
