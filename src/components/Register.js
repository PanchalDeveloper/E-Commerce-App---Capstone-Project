import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="container-fluid bg-light">
        <section className="auth-area py-5">
            <h1 className="text-center my-auto">Register</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-8 col-10 d-flex">
                    <form className="register-form auth-form m-auto w-100">
                      {/* <!-- Full Name --> */}
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Name:</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter Your Full Name" autoComplete="name" required />
                      </div>

                      {/* <!-- Email --> */}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">E-mail:</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail" autoComplete="email" required />
                      </div>

                      {/* <!-- DOB Picker --> */}
                      <div className="mb-3">
                        <label htmlFor="dob" className="form-label fw-bold">DOB:</label>
                        <input type="date" className="form-control" id="dob" aria-describedby="dobHelp" required />
                      </div>

                      {/* <!-- New Password --> */}
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-bold">Password:</label>
                        <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Password" autoComplete="new-password" required />
                      </div>

                      {/* <!-- Confirm New Password --> */}
                        <div className="mb-3">
                          <label htmlFor="confirmPassword" className="form-label fw-bold">Verify Password:</label>
                          <input type="password" className="form-control" id="confirmPassword" aria-describedby="confirmPassword" placeholder="Confirm Password" autoComplete="new-password" required />
                        </div>
                        
                        <button type="submit" className="btn btn-main w-100 my-3">Sign-up</button>

                        <div className="my-3">
                          <div id="loginHelp" className="form-text text-center">
                            <Link to="/login" className="no-link">Already have an Account!? Login.</Link>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      </div>
  )
}
