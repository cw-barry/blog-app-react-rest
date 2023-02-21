import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toastNotify } from '../helper/Toastify';

export const AppContext = createContext();
const baseUrl = 'https://cwbarry.pythonanywhere.com/';
// const baseUrl = 'https://20001.fullstack.clarusway.com/';

const AppContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const checkUser = () => {
    if (userInfo) {
      localStorage.setItem('user', JSON.stringify(userInfo));
    } else {
      const user = localStorage.getItem('user');
      if (user) {
        setUserInfo(JSON.parse(user));
      }
    }
  };

  if (!userInfo) checkUser();

  useEffect(() => {
    checkUser();
  }, [userInfo]);

  const registerUser = async (userData, navigate) => {
    try {
      const res = await axios.post(`${baseUrl}account/register/`, userData);
      console.log(res.data);
      setUserInfo({ ...res.data.user, key: res.data.key });
      toastNotify('User registered successfully', 'success');
      navigate('/');
    } catch (error) {
      console.log(error);
      toastNotify(error.message, 'error');
    }
  };

  const loginUser = async (userData, navigate) => {
    console.log(userData);
    try {
      const res = await axios.post(`${baseUrl}account/login/`, userData);
      console.log(res);
      if (res.data.key) {
        setUserInfo({ ...res.data.user, key: res.data.key });
        toastNotify('User LoggedIn successfully', 'success');
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      toastNotify(err.message, 'error');
    }
  };

  const logout = async (navigate) => {
    localStorage.removeItem('user');
    setUserInfo(null);
    toastNotify('User LoggedOut successfully', 'success');
    navigate('/');
  };

  const updateUser = async (userData, navigate) => {
    console.log(userData);
    try {
      const res = await axios({
        method: 'patch',
        url: `${baseUrl}account/user/`,
        data: userData,
        headers: {
          Authorization: `Token ${userInfo.key}`,
        },
      });
      console.log(res);

      setUserInfo({
        ...userInfo,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
      });
      toastNotify('User Updated successfully', 'success');
      navigate('/');
    } catch (err) {
      console.log(err);
      toastNotify(err.message, 'error');
    }
  };

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        registerUser,
        logout,
        loginUser,
        checkUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
