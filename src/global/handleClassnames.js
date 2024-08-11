/**
 * Combines an array of CSS class names into a single string.
 * 
 * @param {string[]} classes - An array of CSS class names to be combined.
 * @returns {string} - A single string containing all class names, separated by spaces.
 * 
 * @example
 * // Example usage:
 * const className = classes(['btn', 'btn-primary', 'active']);
 * console.log(className); // Output: "btn btn-primary active"
 */

export const classes = (classes) => {
  return classes.join(' ').trim()
}
  