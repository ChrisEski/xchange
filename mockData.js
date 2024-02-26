export const posts = [
  {
    title: "Post 1",
    body: "Body of post 1",
    slug: "post-1",
    featuredImage:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "65dbe162a088c2462f401bed",
  },
  {
    title: "Post 2",
    body: "Body of post 2",
    slug: "post-2",
    featuredImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    author: "65dbe162a088c2462f401bed",
  },
];

export const users = [
  {
    username: "user1",
    email: "user1@example.com",
    firstName: "User",
    lastName: "One",
    password: "123",
    provider: "local",
    isAdmin: true,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Bio of user 1",
    posts: ["65dbe1e0a088c2462f401bef", "65dbe1f6a088c2462f401bf0"],
  },
  {
    username: "user2",
    email: "user2@example.com",
    firstName: "User",
    lastName: "Two",
    password: "password2",
    provider: "local",
    isAdmin: false,
    avatar:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Bio of user 2",
    posts: [],
  },
];
