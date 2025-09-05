import React from "react";
import Layout from "./common/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero py-5 text-center bg-gradient-primary text-white">
        <h1 className="display-4">Find Your Dream Job or Manage Your Recruitment</h1>
        <p className="lead">Join ATS today to track candidates, post jobs, and streamline hiring.</p>
        <div className="mt-4">
          <a href="/register" className="btn btn-lg btn-light me-2">Register</a>
          <a href="/login" className="btn btn-lg btn-outline-light">Login</a>
        </div>
      </section>

      {/* Features */}
      <section className="features py-5 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-4 shadow-sm">
                <h3>For Candidates</h3>
                <p>Browse jobs, submit applications, and track your status.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow-sm">
                <h3>For Recruiters</h3>
                <p>Post jobs, view applicants, and streamline your hiring process.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow-sm">
                <h3>ATS Dashboard</h3>
                <p>Track candidates and recruitment insights all in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs Preview */}
      <section className="latest-jobs py-5 bg-light text-center">
        <div className="container">
          <h2>Latest Jobs</h2>
          <p>Register or login to view full details and apply.</p>
          {/* Optional: Map through a few jobs fetched from API */}
          <div className="row g-3 mt-4">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h5>Frontend Developer</h5>
                <p>Cairo, Egypt</p>
                <a href="/login" className="btn btn-primary btn-sm">View & Apply</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h5>Backend Developer</h5>
                <p>Alexandria, Egypt</p>
                <a href="/login" className="btn btn-primary btn-sm">View & Apply</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta py-5 text-center bg-primary text-white">
        <h2>Ready to get started?</h2>
        <a href="/register" className="btn btn-light btn-lg me-2">Register</a>
        <a href="/login" className="btn btn-outline-light btn-lg">Login</a>
      </section>
    </Layout>
  );
};

export default Home;
