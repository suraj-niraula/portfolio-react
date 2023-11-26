// import PageHeading from "../../components/PageHeading";
// import "./Contact.css";

// const Contact = ({ name, email, location }) => {
//   return (
//     <>
//       {/* Main Contact Page */}
//       <main className="contact-container">
//         {/* Display the page header */}
//         <PageHeading title="Contact" description="Get in touch" />
//         <div className="contacts">
//           <div className="row">
//             {/* Display the contact form */}
//             <form className="contact-form">
//               <div className="top-input-container">
//                 <input
//                   placeholder="Your Name *"
//                   type="text"
//                   id="name"
//                   name="name"
//                   onChange={""}
//                   required
//                 ></input>
//                 <input
//                   placeholder="Your Email *"
//                   type="email"
//                   id="email"
//                   name="email"
//                   onChange={""}
//                   required
//                 ></input>
//               </div>
//               <div className="bottom-input-container">
//                 <input
//                   className="subject"
//                   placeholder="Subject *"
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   onChange={""}
//                 ></input>
//                 <input
//                   className="message"
//                   placeholder="Message *"
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   onChange={""}
//                   required
//                 ></input>
//               </div>
//               <button className="submit-button">Submit</button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import PageHeading from "../../components/PageHeading";
import "./Contact.css";

const Contact = ({ name, email, location }) => {
  // State to track input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to track submission status
  const [submitted, setSubmitted] = useState(false);

  // Handler function to update state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form submitted:", formData);

  // Clear form data
  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Set submission status to true
  setSubmitted(true);
  };

  return (
    <>
      {/* Main Contact Page */}
      <main className="contact-container">
        {/* Display the page header */}
        <PageHeading title="Contact" description="Get in touch" />
        <div className="contacts">
          <div className="row">
            {/* Display the contact form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="top-input-container">
                <input
                  placeholder="Your Name *"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                ></input>
                <input
                  placeholder="Your Email *"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="bottom-input-container">
                <input
                  className="subject"
                  placeholder="Subject *"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                ></input>
                <input
                  className="message"
                  placeholder="Message *"
                  type="textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <button type="submit" className="submit-button" disabled={submitted}>
                {submitted ? "Submitted" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;

