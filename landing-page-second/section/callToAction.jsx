import React from "react";
import Allheading from "../compunts/Allheading";
import Firstheading from "../compunts/firstheading";
import SecondDiv from "../compunts/SecondDiv";
import Nextline from "../compunts/Nextline";
import Thirdslide from "../compunts/Thirdslide";
import FourthDiv from "../compunts/Fourthdiv";
import Fifthdiv from "../compunts/Fifthdiv";
import Detail from "../compunts/Deatil";
import Cradprise from "../compunts/Cradprise"
import Footer from "../compunts/Footer";

const callToAction = () => {
  return (
    <>
      <div className="firstdiv">
        <br />

        <Allheading />

        <div className="banner">
          <Firstheading />
        </div>
        <div className="images">
          <img
            src="../assets/images/l5-hero-image.png"
            className="images1"
            alt=""
          />
        </div>
      </div>

      <div className="seconddiv">
        <SecondDiv />
      </div>

      <div className="line">
        <hr />
      </div>

      <div className="NEXTLINE">
        <Nextline />
      </div>
      <div className="thirdslide">
        <Thirdslide />
      </div>

      <div className="FOURTHSLIDER">
        <FourthDiv />
      </div>

      <div className="FIFTHSLIDER">
        <Fifthdiv />
      </div>

      <div className="Detailslicedre">
        <Detail />
      </div>

      <div>
        <Cradprise />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default callToAction;
