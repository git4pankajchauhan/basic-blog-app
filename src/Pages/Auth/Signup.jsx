import React from 'react';

const Signup = () => {
  return (
    <section className="bg-light container py-5">
      <div className="row">
        <div className="col-11 col-md-6 mx-auto">
          <form className="p-4 rounded shadow-sm bg-white border-info border">
            <h3 className="text-center mb-4 text-info">Signup</h3>
            <input className="form-control mb-2" type="text" name="name" placeholder="Enter Name" />
            <input className="form-control mb-2" type="email" name="email" placeholder="Enter Email" />
            <input className="form-control mb-2" type="password" name="password" placeholder="Enter Password" />
            <input className="btn btn-outline-info" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
