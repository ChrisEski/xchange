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
