// import React from "react";
// import "./Home.css"
// function Home() {
//   return (
//   <div className="myimg">
//   <img src="https://backgroundcut.co/media/output_images/2aeb96f2-7c35-4888-b3cc-827549017b34/output_image" alt="" />
// </div>
//   )
   
// }


// export default Home;

import "./Home.css";

function Home() {
  
  return (
  
    <div className="hero">
      <div className="hero-left">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/influencer-marketing-illustration-svg-download-png-7036607.png" alt="" className="hero-img" />
      </div>

      <div className="hero-right">
        <h1>Upgrade your <br /> Business with us!</h1>
        <button className="primary-btn">Try Free!</button>

        <div className="cards">
          <div className="card">
            <h3>Book a Demo</h3>
            <p>call your partner and start the work now</p>
          </div>

          <div className="card">
            <h3>Start training</h3>
            <p>contact us and start learning with us</p>
          </div>

          <div className="card">
            <h3>Self service</h3>
            <p>if you're the one providing services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
