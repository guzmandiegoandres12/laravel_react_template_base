import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import Layout from '../../Layout/LayoutSimple';


const Login = () => {
  
  return (
    <div className="row justify-content-center h-100">
      <div className="col-10 col-md-3">
        <div className="form-input-content">
          <div className="card login-form mb-0">
            <div className="card-body pt-5">
              <a className="text-center" href="index.html"> <h4>Rosella</h4></a>

              <form className="mt-5 mb-5 login-input">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <Link href="/home" className="btn login-form__btn submit w-100">Sign In</Link>
              </form>
              <p className="mt-5 login-form__footer">Dont have account? <Link href="/register" className="text-primary">Sign Up</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.Layout = page => <Layout children={page} title="welcome"></Layout>

export default Login;