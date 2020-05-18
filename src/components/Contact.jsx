import React from "react";
import Navbar from "./Navbar";

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      reason: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <Navbar />
        <section className="page-section" id="contact">
          <div className="container appointments-form">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">
                  We'll be reaching out shortly!
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form
                  data-netlify="true"
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  action="https://tender-heyrovsky-b9724b.netlify.app/thanks"
                >
                  <input type="hidden" name="form-name" value="contactForm" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your Email *"
                          required
                          data-validation-required-message="Please enter your email address."
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="reason"
                          name="reason"
                          type="text"
                          placeholder="Reason for contact *"
                          required
                          data-validation-required-message="Please enter your reason for contacting."
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Your Message *"
                          required
                          data-validation-required-message="Please enter a message."
                          onChange={this.handleChange}
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
