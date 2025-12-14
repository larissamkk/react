// function About() {
//   return (
//     <div style={{ padding: "40px", color: "white" }}>
//       <h1>About Us</h1>
//       <p>This is the about page of the website.</p>
//     </div>
//   );
// }

// export default About;

// import "./About.css";

// function About() {
//   return (
//     <div className="about">
//       <div className="about-text">
//         <h1>Choose your influencer now!</h1>
//         <p>choose your influencer right now in our page</p>

//         <div className="buttons">
//           <button>Book now!</button>
//           <button>Meeting</button>
//         </div>
//       </div>

//       <div className="about-img">
//         <img src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-influencer-or-social-media-model-shouting-in-loud-speaker-png-image_6472105.png" alt="Influencer" />
//       </div>

//       <div className="cards">
//         <div className="card">
//           <h3>Gaming</h3>
//           <p>We provide services for the gaming world</p>
//         </div>

//         <div className="card">
//           <h3>Skin care</h3>
//           <p>We provide services for the skin care world</p>
//         </div>

//         <div className="card">
//           <h3>Other</h3>
//           <p>We provide services for the world</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import "./About.css"
function About() {
  return(
<div className="about">
  <div className="about-top">
   
    <div className="about-text">
      <h1>Choose your influencer now!</h1>
      <p>choose your influencer right now in our page</p>

      <div className="buttons">
        <button>Book now!</button>
        <button>Meeting</button>
      </div>
    </div>

   
    <div className="about-img">
      <img src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-influencer-or-social-media-model-shouting-in-loud-speaker-png-image_6472105.png" alt="Influencer" />
    </div>
  </div>
         <div className="cards">
        <div className="card">
          <h3>Gaming</h3>
          <p>We provide services for the gaming world</p>
        </div>

        <div className="card">
         <h3>Skin care</h3>
         <p>We provide services for the skin care world</p>
       </div>

       <div className="card">
         <h3>Other</h3>
         <p>We provide services for the world</p>
       </div>
</div>
     </div>
  );
}
export default About;

