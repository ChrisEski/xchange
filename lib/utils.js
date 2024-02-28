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
export function capitalizeFirstLetter(string) {
  const firstLetter = string?.charAt(0);
  const capitalFirstLetter = firstLetter?.toUpperCase();
  const slicedString = string?.slice(1);
  const capitalizedString = capitalFirstLetter + slicedString;
  return capitalizedString;
}

/**
 * Format a timestamp into a string with the format "dd/mm/yyyy | hh:mm".
 * @param {number} timestamp - The timestamp to format (in milliseconds since the Unix epoch).
 * @returns {string} The formatted date and time string.
 */
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  // Get day, month, year, hours, and minutes
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // Format the date and time
  const newDate = `${day}/${month}/${year} | ${hours}:${minutes}`;
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
export function getInitials(firstName, lastName) {
  // Get the first letter of the first name and capitalize it
  const firstInitial = firstName.charAt(0).toUpperCase();

  // Get the first letter of the last name and capitalize it
  const lastInitial = lastName.charAt(0).toUpperCase();

  // Concatenate the initials
  const initials = firstInitial + lastInitial;

  return initials;
}

export const toggleTheme = () => {
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  const themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
};
