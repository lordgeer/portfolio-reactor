
import React from 'react';
  
const Bio = () => {
  return (
    <>

        
            <main>
                <section className="main-content">
                    <section className="main-content-box">
                    <h1 id="About Me">About Me</h1>
                        <div className="about-container">
                            <img className="picture" src="images/MyPhoto.jpeg" alt="The Face of Thom"></img>
                            <div className="about-text">
                            <p>
                                Hello! Thank you for taking the time to grace my page with your eyes. My name is Thomas Musler (Though
                                you probably noticed that from the header).
                            </p>
                            <p>
                                Personally I'm somone that enjoys detail oriented work and anything that resembles a good puzzle. I have
                                a background in management and team leadership. To keep those abilities sharp over the years I have
                                often used my personal time to advance my leadership skills though weekly team building exercises
                                involving problem solving,
                                conflict resolution training, strategic goal planning and social bonding, all while encouraging skills
                                in data figuring, team work, time management, and listening skills while in a diverse team setting.
                            </p>
                            <p>
                                In terms of programming, I've grown confortable with HTML5, CSS, JavaScript, NodeJS, NPM(and its various
                                applications), as well as MySql, Mongo, Heroku, Hadoop, Spark, and React (what this site is built on). I have an active understanding of current responsive web
                                design and an open and inquiring mind for when new skills can be learned!
                            </p>
                            <p>
                                Don't just take my word for it, go ahead and peruse my works featured here, as well as my GitHub and
                                LinkedIn.
                            </p>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
    </>
    );
};
export default Bio;