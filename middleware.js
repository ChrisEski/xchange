import { authMiddleware } from "@clerk/nextjs";
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
const keys = [];
const regexp = pathToRegexp("/account/:username", keys);
// console.log(keys);
// console.log(regexp);

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/", "/test/(.*)", "/posts/(.*)", "/profile/(.*)", "/api/(.*)"],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
