import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
        // Reset the form or perform other actions as needed
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          budget: "",
          message: "",
        });
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-area page-section scroll-content" id="contact">
      <div className="custom-container">
        <div className="contact-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              contact
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Let's
              <span>Work Together!</span>
            </h1>
          </div>
          <h3 className="scroll-animation" data-animation="fade_from_bottom">
            hello@drake.design
          </h3>
          <p id="required-msg">* Marked fields are required to fill.</p>

          <form className="contact-form">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <label>
                    full Name <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="full-name"
                    placeholder="Your Full Name"
                    onChange={handleChange}
                    value={formData.fullName}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label >
                    Email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-group">
                  <label>
                    subject <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="subject"
                    onChange={handleChange}
                    value={formData.subject}
                  />
                  {/* <select name="subject" id="subject" onChange={handleChange} value={formData.subject}>
                                    <option value="">Select a subject</option>
                                    <option value="Website Maintaince">Website Maintaince</option>
                                    <option value="Website Redesign">Website Redesign</option>
                                    <option value="New Project">New Project</option>
                                </select> */}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label>
                    your budget <span>(optional)</span>
                  </label>
                  <input
                    type="number"
                    name="budget"
                    id="budget"
                    placeholder="A range budget for your project"
                    onChange={handleChange}
                    value={formData.budget}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label>message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Wrire your message here ..."
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button
                    className="theme-btn"
                    name="submit"
                    type="button"
                    id="submit-form"
                    onClick={handleSubmit}
                  >
                    send message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
