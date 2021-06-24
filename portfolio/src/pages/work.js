import Project from '../components/project';
import React from 'react';


const projects = [
    {
        name: 'Tabletop Auction House',
        description: 'An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit',
        image:"./images/ttah.png",
        repo:"https://github.com/lordgeer/Tabletop_Auction_House",
        deployed: "https://tabletop-auction-house.herokuapp.com/"
    },
    {
        name: 'Note Taker',
        description: 'An expressed based note taking application that allows for post, edits and deletions',
        image:"./images/note-taker.png",
        repo:"https://github.com/lordgeer/Note_Taker",
        deployed: "https://github.com/lordgeer/Note_Taker"
    },
    {
        name: 'Outer Rim S and R Tech Blog',
        description: 'A Star Wars themed blog/forum style app for allowing posts, edits, and deletions. Shows author and time of post',
        image:"./images/orsr.png",
        repo:"https://github.com/lordgeer/Tech_Blog",
        deployed: "https://outer-rim-salvage-and-repair.herokuapp.com/"
    },
    {
        name: 'News App',
        description: 'An early, primitive attempt at creating a News gathering application using multiple free-use apis. Allows news to be pulled from differenct sources based on user choice and search title',
        image:"./images/ntg.png",
        repo:"https://github.com/lordgeer/Project-1-Group-8",
        deployed: "https://lordgeer.github.io/Project-1-Group-8/"
    },
]

const renderProjects = () => {
    return (
        projects.map((project, i) => {
            return (
                <Project project={project} key={i+Date.now()} />
            );
        })
    )}


const Work = () => {
    return (
        <div className="row w-100 p-0 m-0" id="work">
            <div className="col-md-12 py-2" id="content-text">
                <div className="row">
                {renderProjects()}
                </div>
            </div>
        </div>
    );
}

// const Work = () => {
//   return (
//     <div>
//         <body>
//             <section className="work-content-box">
//                 <h1 id="work" name="Work">Work</h1>
//                 <div class="container">
//                     <div class="col-12">
//                         <section className="card">
//                             <a href=></a>
//                             <img class="card-img-top" src= alt="Tabletop Auction House"></img>
//                                 <div class="card-body">
//                                     <h3 class="card-title">Tabletop Auction House</h3>
//                                     <p class="card-text">An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit.</p>
//                                     <p class="card-text">JavaScript, Node.js, Express, Sequelize, Handlebars, MySQL/JawsDB, Heroku, Tailwind CSS, custom API, and a Favicon Generator <br />
//                                     <a href= target="">GitHub Repo</a>
//                                     </p>
//                                 </div>
//                         </section>
//                     </div>
//                     <div class="col-12">
//                         <section class="card">
//                             <a href="https://github.com/lordgeer/Note_Taker"></a>
//                             <img class="card-img-top" src="../images/note-taker.png" alt="Tabletop Auction House"></img>
//                                 <div class="card-body">
//                                     <h3 class="card-title">Note Taker</h3>
//                                     <p class="card-text">An expressed based note taking application that allows for post, edits and deletions.</p>
//                                     <p class="card-text">JavaScript, Node.js, Express<br />
//                                     <a href="https://github.com/lordgeer/Note_Taker" target="">GitHub Repo</a>
//                                     </p>
//                                 </div>
//                         </section>
//                     </div>
//                     <div class="col-12">
//                     <section class="card">
//                         <a href="https://outer-rim-salvage-and-repair.herokuapp.com/"></a>
//                         <img class="card-img-top" src="../images/orsr.png" alt="Outer Rim Tech Blog"></img>
//                             <div class="card-body">
//                                 <h3 class="card-title">Outer Rim Salvage and Repair Tech Blog</h3>
//                                 <p class="card-text">A Star Wars themed blog/forum style app for allowing posts, edits, and deletions. Shows author and time of post</p>
//                                 <p class="card-text">JavaScript, Node.js, Express, Sequelize, Handlebars, MySQL/JawsDB, and Heroku<br />
//                                 <a href="https://github.com/lordgeer/Tech_Blog" target="">GitHub Repo</a>
//                                 </p>
//                             </div>
//                     </section>
//                     </div>
//                     <div class="col-12">
//                         <section class="card">
//                             <a href="https://lordgeer.github.io/Project-1-Group-8/"></a>
//                             <img class="card-img-top" src="../images/ntg.png" alt="News The Gathering"></img>
//                                 <div class="card-body">
//                                     <h3 class="card-title">News App</h3>
//                                     <p class="card-text">An early, primitive attempt at creating a News gathering application using multiple free-use apis. Allows news to be pulled from differenct sources based on user choice and search title</p>
//                                     <p class="card-text">JavaScript, Node.js, Local Storage, Github Pages, Materialize CSS, Guardian API, Media Stack, cors-anywhere app, and a Favicon Generator <br />
//                                     <a href="https://github.com/lordgeer/Project-1-Group-8" target="">GitHub Repo</a>
//                                     </p>
//                                 </div>
//                         </section>
//                     </div>
//                 </div>
            
//             </section>
//         </body>
//         <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
//     </div>
    
//   );
// };
  
export default Work;