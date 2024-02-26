import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string) {
  const firstLetter = string.charAt(0);
  const capitalFirstLetter = firstLetter.toUpperCase();
  const slicedString = string.slice(1);
  const capitalizedString = capitalFirstLetter + slicedString;
  return capitalizedString;
}

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  // Get day, month, year, hours, and minutes
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Format the date and time
  const formattedDate = `${day}/${month}/${year} | ${hours}:${minutes}`;

  return formattedDate;
};
