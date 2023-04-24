import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="container-fluid bg-light">
        <section className="auth-area py-5">
            <h1 className="text-center my-auto">Login</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-8 col-10 d-flex">
                    <form className="login-form auth-form m-auto w-100">
                       {/* <!-- Email --> */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">E-mail:</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail" autoComplete="email" required />
                        </div>
                        
                        {/* <!-- Password --> */}
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label fw-bold">Password:</label>
                          <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Enter Your Password" autoComplete="current-password" required />
                        </div>

                        <div className="mb-3">
                          <div id="loginHelp" className="form-text">
                            <Link to="/forgot-password" className="no-link">Forgot password?</Link>
                          </div>
                        </div>
                        
                        <button type="submit" className="btn btn-main w-100 my-3">Login</button>

                        <div className="my-3">
                          <div id="loginHelp" className="form-text text-center">
                            <Link to="/register" className="no-link">Don't have an Account!? Sign-up.</Link>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      </div>
  )
}
