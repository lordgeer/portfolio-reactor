import Project from '../components/project';
import React from 'react';


const projects = [
    {
        name: 'Tabletop Auction House',
        description: 'An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit',
        image:"./images/ttah2.png",
        repo:"https://github.com/smakela13/tabletop-auction-house-react-edition",
        deployed: "https://tabletop-auction-house-2.herokuapp.com/"
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
  
export default Work;