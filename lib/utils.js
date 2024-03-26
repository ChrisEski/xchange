import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Capitalize the first letter of a string.
 * @param {string} string - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (string) => {
  const firstLetter = string?.charAt(0);
  const capitalFirstLetter = firstLetter?.toUpperCase();
  const slicedString = string?.slice(1);
  const capitalizedString = capitalFirstLetter + slicedString;
  return capitalizedString;
};

/**
 * Format a timestamp into a string with the format "dd/mm/yyyy | hh:mm" if `showTime` is true,
 * otherwise, format the timestamp as "dd/mm/yyyy".
 * @param {number} timestamp - The timestamp to format (in milliseconds since the Unix epoch).
 * @param {boolean} showTime - A flag indicating whether to include the time portion in the formatted string.
 * @returns {string|null} The formatted date and time string if `timestamp` is provided; otherwise, null.
 */
export const formatDate = (timestamp, showTime) => {
  const date = new Date(timestamp);
  // Get day, month, year, hours, and minutes
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // Format the date and time
  let newDate;
  if (showTime) {
    newDate = `${day}/${month}/${year} | ${hours}:${minutes}`;
  } else {
    newDate = `${day}/${month}/${year}`;
  }
  const formattedDate = timestamp ? newDate : null;

  return formattedDate;
};

/**
 * Create an excerpt from the given body text.
 * If the number of words in the body text is less than or equal to maxWords,
 * returns the original body text. Otherwise, returns an excerpt with the first
 * maxWords words followed by the specified separator.
 * @param {string} body - The body text from which to create the excerpt.
 * @param {number} maxWords - The maximum number of words to include in the excerpt.
 * @param {string} [separator="..."] - The separator to append to the excerpt if it is truncated.
 * @returns {string} The excerpted text.
 */
export const createExcerpt = (body, maxWords, separator = "...") => {
  // Split the body into an array of words
  const words = body.trim().split(" ");

  // If the number of words is less than or equal to maxWords, return the original body
  if (words.length <= maxWords) {
    return body;
  }

  // Otherwise, construct the excerpt by joining the first maxWords words with the separator
  const excerpt = words.slice(0, maxWords).join(" ") + separator;
  return excerpt;
};

/**
 * Get initials from first and last name.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {string} The initials capitalized.
 */
export const getInitials = (firstName, lastName) => {
  // Get the first letter of the first name and capitalize it
  const firstInitial = firstName?.charAt(0).toUpperCase();

  // Get the first letter of the last name and capitalize it
  const lastInitial = lastName?.charAt(0).toUpperCase();

  // Concatenate the initials
  const initials = firstInitial + lastInitial;

  return initials;
};

/**
 * Transliterates Greek characters to their English alphabet equivalents.
 * This function maps each Greek character to its corresponding English letter or letters.
 * Unsupported characters are left unchanged. The function is case-sensitive and includes
 * mappings for both uppercase and lowercase Greek letters, as well as accented characters.
 *
 * @param {string} text The text containing Greek characters to be transliterated.
 * @returns {string} The transliterated text with Greek characters replaced by their English equivalents.
 * @example
 * transliterateGreekToEnglish("Αυτό είναι ένα νέο άρθρο");
 * returns 'afto-einai-ena-neo-arthro'
 */
export const transliterateGreekToEnglish = (text) => {
  const greekToEnglishMap = {
    α: "a",
    β: "v",
    γ: "g",
    δ: "d",
    ε: "e",
    ζ: "z",
    η: "i",
    θ: "th",
    ι: "i",
    κ: "k",
    λ: "l",
    μ: "m",
    ν: "n",
    ξ: "x",
    ο: "o",
    π: "p",
    ρ: "r",
    σ: "s",
    ς: "s",
    τ: "t",
    υ: "u",
    φ: "f",
    χ: "ch",
    ψ: "ps",
    ω: "o",
    Α: "A",
    Β: "V",
    Γ: "G",
    Δ: "D",
    Ε: "E",
    Ζ: "Z",
    Η: "I",
    Θ: "Th",
    Ι: "I",
    Κ: "K",
    Λ: "L",
    Μ: "M",
    Ν: "N",
    Ξ: "X",
    Ο: "O",
    Π: "P",
    Ρ: "R",
    Σ: "S",
    Τ: "T",
    Υ: "U",
    Φ: "F",
    Χ: "Ch",
    Ψ: "Ps",
    Ω: "O",
    έ: "e",
    ί: "i",
    ά: "a",
    ή: "i",
    ώ: "o",
    ό: "o",
    ύ: "u",
    ϊ: "i",
    ϋ: "u",
    ΐ: "i",
    ΰ: "u",
    ϕ: "f",
  };

  return text
    .split("")
    .map((char) => greekToEnglishMap[char] || char)
    .join("");
};
