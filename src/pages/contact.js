import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';

init(process.env.REACT_APP_USER_ID);

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState();

  function sendEmail(e) {
    e.preventDefault();

    const form = document.querySelector('#contact');
    const statusMsg = document.querySelector('.status-message');

    emailjs
      .sendForm(
        'contact_form',
        'template_contact',
        e.target,
      )
      .then(
        (result) => {
          form.reset();
          console.log(result.text);
          setStatusMessage('Message sent!');
          statusMsg.className = 'status-message';
          setTimeout(() => {
            statusMsg.className = 'status-message';
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('Failed to send message! Try again later.');
          statusMsg.className = 'status-message';
          setTimeout(() => {
            statusMsg.className = 'status-message';
          }, 5000);
        });
  }


  return (
    <div>
      <div>
        <section className="main-content-box">
          <form onSubmit={sendEmail} id='contact'>
            <h1 id="contact-me">Contact Me</h1>
            <p>Feel free to reach out and contact me at any one of these 3 locations! Email is Prefered!</p>
            <br />
            <div class="contact d-flex justify-content-around">
              <a href="https://github.com/lordgeer"><img class="mash" src="/images/GitHub-Mark-64px.png" alt="GitHub" /></a>
              <a href="mailto:thomas.g.musler@gmail.com"><img class="mash" src="/images/Gmail-logo.jpg" alt="Email" /></a>
              <a href="https://www.linkedin.com/in/thomas-musler-031752178/"><img class="mash" src="/images/LI-In-Bug.png"
                alt="LinkedIn" /></a>
            </div>
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-title">
                      <hr />
                      <form id="contact-form" >
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <input placeholder="Name" id="name" type="text"
                                className="form-control" />
                            </div>
                            <div className="col-md-6">
                              <input placeholder="Email" id="email"
                                className="form-control"
                                type='email'
                                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                name='reply_to'
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input placeholder="Subject" id="subject" type="text"
                            className="form-control" />
                        </div>
                        <div className="form-group">
                          <textarea placeholder="Message" id="message"
                            className="form-control" />
                        </div>
                        <p className='status-message'>{statusMessage}</p>
                        <button type="submit" value="send" className="primary-btn submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};


export default Contact;