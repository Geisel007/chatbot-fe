/**
 * Gets the current date and time formatted as an object.
 * 
 * The function returns an object containing:
 * - The current time in `HH:MM` format.
 * - The current date in `Month DD, YYYY` format.
 * 
 * @returns {Object} An object with two properties:
 *   @property {string} time - The current time in `HH:MM` format.
 *   @property {string} date - The current date in `Month DD, YYYY` format.
 * 
 * @example
 * // Example usage
 * const currentDateTime = getDateTime();
 * console.log(currentDateTime.time); // Output: "14:05" (or current time)
 * console.log(currentDateTime.date); // Output: "August 11, 2024" (or current date)
 */
export const getDateTime = () => {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const time = `${hours}:${minutes}`
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
  const formattedDate = formatter.format(date)
  return ({
    time,
    date: formattedDate
  })
}
