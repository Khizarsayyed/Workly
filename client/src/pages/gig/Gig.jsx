import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Workly{" >"} Graphics & Design {">"}</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Anna Bell</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
  <h2>Reviews</h2>

  <div className="item">
    <div className="user">
      <img
        className="pp"
        src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="info">
        <span>Hiroshi Tanaka</span>
        <div className="country">
          <img
            src="https://flagcdn.com/w40/jp.png"
            alt="Japan Flag"
          />
          <span>Japan</span>
        </div>
      </div>
    </div>
    <div className="stars">
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <span>5</span>
    </div>
    <p>
      The artwork was impressive. The designer really understood what I wanted from my vague prompt. I will definitely return for more AI art!
    </p>
    <div className="helpful">
      <span>Helpful?</span>
      <img src="/img/like.png" alt="" />
      <span>Yes</span>
      <img src="/img/dislike.png" alt="" />
      <span>No</span>
    </div>
  </div>

  <hr />

  <div className="item">
    <div className="user">
      <img
        className="pp"
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="info">
        <span>Priya Deshmukh</span>
        <div className="country">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India Flag"
          />
          <span>India</span>
        </div>
      </div>
    </div>
    <div className="stars">
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <span>5</span>
    </div>
    <p>
      Absolutely love the outcome! Very prompt service and great attention to detail. Highly recommended for custom art projects!
    </p>
    <div className="helpful">
      <span>Helpful?</span>
      <img src="/img/like.png" alt="" />
      <span>Yes</span>
      <img src="/img/dislike.png" alt="" />
      <span>No</span>
    </div>
  </div>

  <hr />

  <div className="item">
    <div className="user">
      <img
        className="pp"
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="info">
        <span>Chen Wei</span>
        <div className="country">
          <img
            src="https://flagcdn.com/w40/cn.png"
            alt="China Flag"
          />
          <span>China</span>
        </div>
      </div>
    </div>
    <div className="stars">
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <img src="/img/star.png" alt="" />
      <span>5</span>
    </div>
    <p>
      Brilliant work and very efficient. The revisions were handled smoothly and the communication was clear. Highly professional!
    </p>
    <div className="helpful">
      <span>Helpful?</span>
      <img src="/img/like.png" alt="" />
      <span>Yes</span>
      <img src="/img/dislike.png" alt="" />
      <span>No</span>
    </div>
  </div>
</div>

        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>₹ 4,897</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;