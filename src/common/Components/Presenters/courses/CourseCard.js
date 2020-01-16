import React from 'react';
import { trimString } from '../../../helpers/helper';

const CourseCard = (props) => {
    const {image, name, amount, description} = props;

    return(
        <div className="course bg-white h-100 align-self-stretch">
            <figure className="m-0">
            <a href="#">
                <img
                src={image}
                alt="Image"
                className="img-fluid"
                />
            </a>
            </figure>
            <div className="course-inner-text py-4 px-4">
            <span className="course-price">{amount}</span>
            <div className="meta">
                <span className="icon-clock-o"></span>4 Lessons / 12 week
            </div>
            <h3>
                <a href="#">{name}</a>
            </h3>
            <p>
                {trimString(description)}
            </p>
            </div>
            <div className="d-flex border-top stats">
            <div className="py-3 px-4">
                <span className="icon-users"></span> 2,193 students
            </div>
            <div className="py-3 px-4 w-25 ml-auto border-left">
                <span className="icon-chat"></span> 2
            </div>
            </div>
        </div>
    )
}

export default CourseCard;