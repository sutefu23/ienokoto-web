// import type { WP_REST_API_Posts, WP_REST_API_Error } from "wp-types";
// import apiFetch from "@wordpress/api-fetch";
// export async function getStaticPaths() {
//   const posts = await apiFetch<WP_REST_API_Posts>({
//     path: "/wp/v2/posts/",
//   });

//   return posts.map((post) => ({
//     params: { id: post.id },
//     props: { post: post },
//   }));
// }