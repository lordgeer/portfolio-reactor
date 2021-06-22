import React from 'react';
// import background from "../images/malacor.png"
  
const Contact = () => {
  return (
    <div>
      <body>
            <section className="main-content-box">
                <h1 id="contact-me">Contact Me</h1>
                <p>Feel free to reach out and contact me at any one of these 3 locations! Email is Prefered!</p>
                <br />
                <div class="contact d-flex justify-content-around">
                <a href="https://github.com/lordgeer"><img class="mash" src="/images/GitHub-Mark-64px.png" alt="GitHub" /></a>
                <a href="mailto:thomas.g.musler@gmail.com"><img class="mash" src="/images/Gmail-logo.jpg" alt="Email" /></a>
                <a href="https://www.linkedin.com/in/thomas-musler-031752178/"><img class="mash" src="/images/LI-In-Bug.png"
                    alt="LinkedIn" /></a>
                </div>
            </section>
        </body>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    </div>
  );
};
  
export default Contact;