const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    comments: '/comments',
    todos: '/todos',
    albums: '/albums',
    postById: (id) => `/posts/${id}`
};

export {
    baseURL, urls
};