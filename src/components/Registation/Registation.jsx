import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Registation = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegistaion = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset()
        }).catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegistaion} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input type="text" name='name' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">Already have an account?LogIn</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Registation</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Registation;