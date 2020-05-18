import React from "react";
import Navbar from "./Navbar";

class ThankYouPage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div class="main">
          <div class="card">
            <div class="header">
              <h1>Thank you!</h1>
            </div>
            <div class="body">
              <p>submission has been received.</p>

              <p>
                <a
                  id="back-link"
                  href="https://master--tender-heyrovsky-b9724b.netlify.app/contact"
                >
                  ← Back to our site
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ThankYouPage;
