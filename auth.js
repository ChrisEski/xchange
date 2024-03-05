// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// // // import GitHub from "next-auth/providers/github";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [GoogleProvider],
//   cookies: {
//     csrfToken: {
//       name: "next-auth.csrf-token",
//       options: {
//         httpOnly: true,
//         sameSite: "none",
//         path: "/",
//         secure: true,
//       },
//     },
//     pkceCodeVerifier: {
//       name: "next-auth.pkce.code_verifier",
//       options: {
//         httpOnly: true,
//         sameSite: "none",
//         path: "/",
//         secure: true,
//       },
//     },
//   },
// });
