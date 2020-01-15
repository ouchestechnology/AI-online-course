import React, { Component } from "react";
import {connect} from 'react-redux';
import CourseCard from "../Presenters/courses/CourseCard";

class Courses extends Component {
  render() {
    const {courses} = this.props;

    return (
      <div>
        <div className="site-section courses-title" id="courses-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div
                className="col-lg-7 text-center"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <h2 className="section-title">Courses</h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-section courses-entry-wrap"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="container">
            <div className="row">
              <div className="owl-carousel col-12 nonloop-block-14">
                {courses.map((item, index) => {
                  return <CourseCard
                            image={item.image}
                            name={item.title}
                            amount={item.amount}
                            description={item.description}
                        />
                })}

              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-7 text-center">
                <button className="customPrevBtn btn btn-primary m-1">Prev</button>
                <button className="customNextBtn btn btn-primary m-1">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {courses} = state.fleskService.course;
  return {courses}
};


export default connect(mapStateToProps, {})(Courses);
