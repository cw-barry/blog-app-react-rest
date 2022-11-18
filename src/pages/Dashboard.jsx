import React, { useContext } from 'react';

import { BlogCard, Layout } from '../components/';
import { BlogContext } from '../context/BlogContext';

const Dashboard = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <Layout>
      <p className="fs-2 text-center mt-5">Dashboard</p>
      <div className="container d-flex flex-wrap gap-3 justify-content-center">
        {blogs?.map((item) => (
          <div
            key={item.id}
            style={{
              width: '20rem',
            }}
          >
            <BlogCard data={item} />
          </div>
        ))}
        {/* <div
          style={{
            width: '20rem',
          }}
        >
          <BlogCard />
        </div>
        <div
          style={{
            width: '20rem',
          }}
        >
          <BlogCard />
        </div>
        <div
          style={{
            width: '20rem',
          }}
        >
          <BlogCard />
        </div>
        <div
          style={{
            width: '20rem',
          }}
        >
          <BlogCard />
        </div>
        <div
          style={{
            width: '20rem',
          }}
        >
          <BlogCard />
        </div> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
