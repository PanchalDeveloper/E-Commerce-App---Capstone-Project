import React from 'react'
import contactImg from '../images/contact-us-bnnr-img.webp'

export default function ContactUs() {
  return (
    <div className="container-fluid bg-light py-5">
        <section className="contact-area">
          <h1 className="text-center mb-5">Contact Us</h1>
          <div className="container row g-4 justify-content-around mx-auto">
            <div className="col-md-5">
                <img src={ contactImg } alt="Top Banner" width="100%" height="100%" />
            </div>
            <div className="col-md-5 d-flex">
                <form className="contact-form m-auto w-100">
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label fw-bold">Name:</label>
                        <input type="text" className="form-control" id="name" aria-describedby="Name" placeholder="Enter Your Name" autoComplete="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">E-mail:</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail" autoComplete="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label fw-bold">Message:</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Enter Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-main w-100">Submit</button>
                </form>
            </div>
        </div>
        </section>
      </div>
  )
}
