import React from 'react'

export default function ForgotPassword() {
  return (
    <div className="container-fluid bg-light">
        <section className="auth-area py-5">
            <h1 className="text-center my-auto">Change Password</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-8 col-10 d-flex">
                    <form className="login-form auth-form m-auto w-100">
                       {/* <!-- Email --> */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">E-mail:</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail" autoComplete="email" required />
                        </div>

                        {/* <!-- Old Password --> */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-bold">Old Password:</label>
                            <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Enter Your Old Password" autoComplete="current-password" required />
                        </div>

                        {/* <!-- New Password --> */}
                        <div className="mb-3">
                          <label htmlFor="newPassword" className="form-label fw-bold">New Password:</label>
                          <input type="password" className="form-control" id="confirmPassword" aria-describedby="newPassword" placeholder="Enter New Password" autoComplete="new-password" required />
                        </div>
                        
                        <button type="submit" className="btn btn-main w-100 my-3">Change</button>
                    </form>
                </div>
            </div>
        </section>
      </div>
  )
}
