import React, { Component } from "react";
import { SLIDE1 } from "../../style/images";
import AppInput from "../Reusables/inputs/AppInput";
import RoundedButton from "../Reusables/buttons/RoundedButton";
import Links from "../Reusables/buttons/Links";

class Intro extends Component {
  render() {
    return (
      <div className="intro-section" style={{backgroundImage: `url('images/hero_1.jpg')`}} id="home-section">
        <div className="slide-1" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4">
                    <h1 data-aos="fade-up" data-aos-delay="100">
                      Learn and Gain Real life Experience 
                    </h1>
                    <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
                    Artificial Intelligence and robotic is the foundation of any Future business.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="300">
                      <Links
                        href="#"
                      >
                        Admission Now
                      </Links>
                    </p>
                  </div>

                  <div
                    className="col-lg-5 ml-auto"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <form action="" method="post" className="form-box">
                      <h3 className="h4 text-black mb-4">Sign Up</h3>
                      <div className="form-group">
                        <AppInput
                          type="text"
                          
                          placeholder="Email Addresss"
                        />
                      </div>
                      <div className="form-group">
                        <AppInput
                          type="password"
                          
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <AppInput
                          type="password"
                          
                          placeholder="Re-type Password"
                        />
                      </div>
                      <div className="form-group">
                        
                        <RoundedButton 
                          name="sign up"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
