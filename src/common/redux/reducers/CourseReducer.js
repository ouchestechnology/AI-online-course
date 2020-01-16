
import {GET_COURSES} from './../actions/types'

const INITIAL_STATE = {
    courses: [
        {
            title: 'Artificial Intelligence- Full course',
            description: "Gain from AI specialists at AinR Academy, Regardless of whether you're simply figuring out how to code or you're a prepared AI 	expert, you'll discover data and activities to assist you with building up your aptitudes and 	get employed.",
            image: 'images/img_1.jpg',
            amount: '$193',
            promo: '$28.95'
        },
        {
            title: 'Deep Learning with Python',
            description: "Deep Learning with Python introduces the field of deep learning using the Python language",
            image: 'images/img_2.jpg',
            amount: '$150',
            promo: '$22.50'
        },
        {
            title: 'Arduino Robotics',
            description: "With the Arduino Robot, you can learn about electronics, mechanics, and software.",
            image: 'images/img_3.jpg',
            amount: '$70',
            promo: '$10.50'
        },
        {
            title: 'Robotics',
            description: "Learn about the fascinating components of robot anatomy, robot control, and robot 	behaviour through a set of simulations.",
            image: 'images/img_4.jpg',
            amount: '$120',
            promo: '$18.00'
        },

        {
            title: 'python',
            description: "Whether you are an experienced programmer or not, you will learn 	python and become a pro",
            image: 'images/img_5.jpg',
            amount: '$20',
            promo: '$10.50'
        },
        {
            title: 'Tensorflow',
            description: "Learn tensor flow and dive into Deep learning and Machine learning with easy.",
            image: 'images/img_6.jpg',
            amount: '$22',
            promo: '$10.50'
        },

    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_COURSES:
            return { ...state,  courses: action.payload};

        default: return state
    }
}
