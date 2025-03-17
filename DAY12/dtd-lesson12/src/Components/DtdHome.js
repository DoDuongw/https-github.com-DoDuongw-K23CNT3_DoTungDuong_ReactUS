import React from "react";

export default function DtdHome() {
  return (
    <div className="container-fluid p-5 text-center bg-gradient">
      <div className="card shadow-lg border-0 p-5 bg-light">
        {/* Title Section */}
        <h1 className="fw-bold text-primary mb-3 animate__animated animate__fadeInDown">
          🌟 Welcome to Our Amazing App! 🚀
        </h1>
        <p className="fs-5 text-muted animate__animated animate__fadeIn">
          Your one-stop solution for managing everything efficiently and effortlessly.
        </p>

        {/* Hero Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK46BhfC9EaB_ofA_hUiUqvFv_7Xp6e29tjA&"
          alt="Hero"
          className="img-fluid rounded shadow-lg mt-3 animate__animated animate__zoomIn"
          style={{ maxWidth: "600px", borderRadius: "15px" }}
        />

        {/* CTA Button */}
        <div className="mt-4">
          <a href="/dashboard" className="btn btn-lg btn-primary shadow-lg animate__animated animate__pulse animate__infinite">
            🚀 Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}
