import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import PrivateRouter from './PrivateRouter';
import {
  Login,
  Register,
  Dashboard,
  BlogCardDetails,
  CreateBlog,
  UserProfile,
} from '../pages';

const AppRouter = () => {
  const { userInfo } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="post/details" element={<BlogCardDetails />} />
          <Route path="post/create" element={<CreateBlog />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
