import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  Register,
  Dashboard,
  BlogCardDetails,
  CreateBlog,
  UserProfile,
} from '../pages';

const AppRouter = () => {
  const userInfo = false;
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path="/" element={userInfo ? <Dashboard /> : <Login />} />
        <Route
          path="/post/details"
          element={userInfo ? <BlogCardDetails /> : <Login />}
        />
        <Route
          path="/post/create"
          element={userInfo ? <CreateBlog /> : <Login />}
        />
        <Route
          path="/profile"
          element={userInfo ? <UserProfile /> : <Login />}
        />
        {/* Auth */}
        <Route
          path="/auth/login"
          element={userInfo ? <Dashboard /> : <Login />}
        />
        <Route
          path="/auth/register"
          element={userInfo ? <Dashboard /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
