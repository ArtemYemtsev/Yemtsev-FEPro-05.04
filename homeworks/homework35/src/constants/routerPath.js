export const ROUTES = {
    root: "/",
    posts: "/posts",
    post: (postId = '') => postId ? `/post/${postId}` : "/post/:postId",
    albums: (userId = '') => userId ? `/albums/${userId}` : "/albums/:userId",
    photos: (albumId = '') => albumId ? `/albums/${albumId}/photos` : "albums/:albumId/photos"
}