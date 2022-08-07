import { Inertia } from '@inertiajs/inertia';
import { Link ,useForm, usePage} from '@inertiajs/inertia-react';
import React from 'react';

import Alert, { ALERT_TYPE } from '../../Componets/Alert';
import Layout from '../../Layout/LayoutSimple';

const Login = () => {
  
  const formHelper = useForm({
    email: '',
    password: '',
    remember: true
  }) 
  const page = usePage().props
  console.log(page);
  function submit(e) {
    e.preventDefault()
    formHelper.post('/login');
  }

  return (
    <div className="row justify-content-center h-100">
      <div className="col-10 col-md-3">
        <div className="form-input-content">
          <div className="card login-form mb-0">
            <div className="card-body pt-5">
              <a className="text-center" href="index.html"> <h4>Rosella</h4></a>

              <form onSubmit={submit} className="mt-5 mb-5 login-input">
                <div className="form-group">
                  <input type="email" value={formHelper.data.email} onChange={e => formHelper.setData('email',e.target.value)} className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" value={formHelper.data.password} onChange={e => formHelper.setData('password',e.target.value)} className="form-control" placeholder="Password" />
                </div>
                <button type="submit"  className="btn login-form__btn submit w-100">Sign In</button>
                <div>
                  <Alert type={ALERT_TYPE.danger} show={true} dimisible={true}>
                    <div className='d-flex justify-content-center'><strong>Usuario o contraseña incorrectos</strong> .</div>
                  </Alert> 
                </div>
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