import {Dimensions} from 'react-native';
import en from '../assets/languages/en.json';
import {ICONS} from './images';

const screen = Dimensions.get('window');
export const BASE_URL = 'http://192.168.1.165:4000';

export const API_ERROR_MESSAGE = 'Something wents wrong';

// export const QUIZ_CATEGORY = [
//     {id:1,image:ICONS.email,name:'Math',total_quizzes:21},
//     {id:2,image:ICONS.email,name:'Sports',total_quizzes:18},
//     {id:3,image:ICONS.headphone,name:'Music',total_quizzes:12},
//     {id:4,image:ICONS.email,name:'Science',total_quizzes:15},
//     {id:5,image:ICONS.email,name:'Art',total_quizzes:11},
//     {id:6,image:ICONS.email,name:'Travel',total_quizzes:14},
//     {id:7,image:ICONS.email,name:'History',total_quizzes:7},
//     {id:8,image:ICONS.email,name:'Tech',total_quizzes:8},
// ]

export const QUIZ_CATEGORY = [
  {id: 1, image: ICONS.email, name: 'Math', total_questions: 21},
  {id: 2, image: ICONS.email, name: 'Sports', total_questions: 18},
  {id: 3, image: ICONS.headphone, name: 'Music', total_questions: 12},
  {id: 4, image: ICONS.email, name: 'Science', total_questions: 15},
  {id: 5, image: ICONS.email, name: 'Art', total_questions: 11},
  {id: 6, image: ICONS.email, name: 'Travel', total_questions: 14},
  {id: 7, image: ICONS.email, name: 'History', total_questions: 7},
  {id: 8, image: ICONS.email, name: 'Tech', total_questions: 8},
];
export const QUESTIONS = [
  {id: 1, image: ICONS.email, level: 'Basic', question: '121 Divided by 11 is'},
  {
    id: 2,
    image: ICONS.email,
    level: 'Basic',
    question: '60 Times of 8 Equals to',
  },
  {
    id: 3,
    image: ICONS.headphone,
    level: 'Advanced',
    question:
      'Find the Missing Term in Multiples of 6 : 6, 12, 18, 24, _, 36, 42, _ 54, 60.',
  },
  {
    id: 4,
    image: ICONS.email,
    level: 'Advanced',
    question: 'What is the Next Prime Number after 7 ?',
  },
  {
    id: 5,
    image: ICONS.email,
    level: 'Intermediate',
    question: 'The Product of 131 × 0 × 300 × 4',
  },
  {
    id: 6,
    image: ICONS.email,
    level: 'Intermediate',
    question: 'How Many Years are there in a Decade?',
  },
  {
    id: 7,
    image: ICONS.email,
    level: 'Advanced',
    question:
      'Priya had 16 Red Balls, 2 Green Balls, 9  Blue Balls, and 1 Multicolor Ball. If He Lost 9 Red Balls, 1 Green Ball, and 3 Blue Balls. How Many Balls would be Left?',
  },
  {
    id: 8,
    image: ICONS.email,
    level: 'Intermediate',
    question: 'How Many Sides are there in a Decagon?',
  },
];

export const QUIZ_LEVELS = [
  {id: 1, name: 'Basic'},
  {id: 2, name: 'Intermediate'},
  {id: 3, name: 'Advanced'},
];

export const USER_ROLE = {
  PLAYER: 'player',
  ADMIN: 'admin',
};
