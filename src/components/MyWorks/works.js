import React from "react";
import './works.css';
import Comics from '../../assets/project1.jpg';
import arnis from '../../assets/Project2.png';
import spotify from '../../assets/Project3.jpg';

const Works = () => {
  
  const showAlert = (message) => {
    alert(message);
  }

  return (
    <section id='works'>
      <h2 className="workTitle">My Projects</h2>
      <div className="container">
        <div className="box-container">
          <div className="box" id="box_1">
            <img src={Comics} alt="Comics" />
            <h3>My very First Comic</h3>
            <p>A comic about an Angel</p>
            <button onClick={() => showAlert("This is a comic that i made 8 years ago")} className="btn" id="Comicsbutton">Read More</button>
          </div>
          <div className="box" id="box_2">
            <img src={arnis} alt="Arnis" />
            <h3>Arnis</h3>
            <p>My other hobby</p>
            <button onClick={() => showAlert("This is my hobby whenever i get bored of drawing")} className="btn" id="arnisbutton">Read More</button>
          </div>
          <div className="box" id="box_3">
            <img src={spotify} alt="Spotify" />
            <h3>Spotify</h3>
            <p>This is my best spotify playlist</p>
            <button onClick={() => showAlert("https://open.spotify.com/playlist/780lDjZ7GhdUJJQeKeqUyO?si=d028cf7d0b8b4405")} className="btn" id="spotifybutton">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
