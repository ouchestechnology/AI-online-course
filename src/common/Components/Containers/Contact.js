import React, { Component } from "react";
import AppInput from "../Reusables/inputs/AppInput";
import RoundedButton from "../Reusables/buttons/RoundedButton";

class Contact extends Component {
  render() {
    return (
      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h2 className="section-title mb-3">Message Us</h2>
              <p className="mb-5">
                Get any information you need from us regarding our services.
              </p>

              <form method="post" data-aos="fade">
                <div className="form-group row">
                  <AppInput className="col-md-6"  placeholder={'First Name'}/>
                  <AppInput className="col-md-6"  placeholder={'Last Name'}/>
                </div>

                <div className="form-group row">
                  <AppInput className="col-md-12"  placeholder={'Subject'}/>
                </div>

                <div className="form-group row">
                    <AppInput className="col-md-12"  placeholder={'Email'}/>
                </div>
                
                <div className="form-group row">
                  
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Write your message here."
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6">
                    <RoundedButton className={"btn-block"} name={'Send Message'} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
