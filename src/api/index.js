import axios from 'axios';

const url = 'https://memories-ankit-server.herokuapp.com/post';

export const fetchPost = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const deletePost = (id) => axios.delete(`${url}/${id}`);