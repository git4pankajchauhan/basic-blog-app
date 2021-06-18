import React from 'react';
import Post from 'Components/Post/Post';

const Home = () => {
  return (
    <section className="bg-light container">
      <h1>Home Page</h1>
      <div className="row">
        <div className="col-11 col-md-3 mx-auto">
          <Post title="post 1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore unde repudiandae ratione." />
        </div>
      </div>
    </section>
  );
};

export default Home;
