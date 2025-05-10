import React from 'react';
import "./Featured.scss";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
      <div className="left">
          <h1>
          The Art of Getting Things Done. Freely.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Video Editing</button>
            <button>Social Media Marketing</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/woman.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
