import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toastNotify } from '../helper/Toastify';
import { AppContext } from './AppContext';

export const BlogContext = createContext();
const baseUrl = 'https://cwbarry.pythonanywhere.com/';
// const baseUrl = 'https://20001.fullstack.clarusway.com/';

const BlogContextProvider = ({ children }) => {
  const { userInfo } = useContext(AppContext);
  const [blogs, setBlogs] = useState(null);
  const [currentBlog, setCurrentBlog] = useState();

  const getBlogs = async () => {
    try {
      const res = await axios.get(`${baseUrl}blog/`);
      console.log(res.data.results);
      setBlogs(res.data.results);
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  const addBlog = async (data, navigate) => {
    const formdata = new FormData();
    console.log(data);
    if (data?.image) formdata.append('image', data.image, data.image.name);
    formdata.append('title', data.title);
    formdata.append('content', data.content);

    try {
      const res = await axios({
        method: 'post',
        url: `${baseUrl}blog/`,
        data: formdata,
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      console.log(res);
      toastNotify('Blog added successfully', 'success');
      getBlogs();
      navigate('/');
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  const updateBlog = async (id, data, navigate) => {
    const formdata = new FormData();
    console.log(data);
    if (data?.image) formdata.append('image', data.image, data.image.name);
    formdata.append('title', data.title);
    formdata.append('content', data.content);

    try {
      const res = await axios({
        method: 'put',
        url: `${baseUrl}blog/${id}/`,
        data: formdata,
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      console.log(res);
      toastNotify('Blog updated successfully', 'success');
      getBlogs();
      navigate('/');
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  const getSingleBlog = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}blog/${id}/`, {
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      console.log(res.data);
      setCurrentBlog(res.data);
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  const addComment = async (id, comment) => {
    console.log(userInfo.key);
    try {
      const res = await axios({
        method: 'post',
        url: `${baseUrl}blog/comment/`,
        data: { post: id, content: comment },
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      console.log(res.data);
      getSingleBlog(id);
      toastNotify('Comment added successfully', 'success');
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  const addLike = async (slug, id) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${baseUrl}blog/like/${slug}/`,
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      console.log(res.data);
      getSingleBlog(id);
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  const deleteBlog = async (id, navigate) => {
    try {
      const res = await axios({
        method: 'delete',
        url: `${baseUrl}blog/${id}/`,
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      console.log(res.data);
      toastNotify('Post deleted successfully', 'success');
      navigate('/');
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        addBlog,
        getBlogs,
        getSingleBlog,
        currentBlog,
        addComment,
        addLike,
        deleteBlog,
        updateBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
