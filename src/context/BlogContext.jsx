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

  const getSingleBlog = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}blog/${id}/`);
      console.log(res.data);
      setCurrentBlog(res.data);
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
      value={{ blogs, addBlog, getBlogs, getSingleBlog, currentBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
