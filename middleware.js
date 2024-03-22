import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/test/(.*)",
    "/posts/(.*)",
    "/posts/categories/(.*)",
    "/profile/(.*)",
    "/api/(.*)",
    // "/api/posts",
    // "/api/posts/(.*)",
    // "/api/users",
    // "/api/users/(.*)/posts",
    // "/api/subscribers",
    // "/api/webhooks",
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ["/about", "/contact", "/cookies", "/privacy", "/tos"],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// "/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"
