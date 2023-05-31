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

export const QUESTION_ARRAY = [
  {
    id: 1,
    level_id: "646efba5c694429b3392b765",
    question: "React.js is written in which language?",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: false, option: "C++" },
      { is_correct_answer: true, option: "JavaScript" },
      { is_correct_answer: false, option: "Java" },
      { is_correct_answer: false, option: "C" },
    ],
  },
  {
    id: 2,
    level_id: "646efba5c694429b3392b765",
    question: "Highest capacity of the storage are",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: false, option: "Terabyte" },
      { is_correct_answer: true, option: "Yottabyte" },
      { is_correct_answer: false, option: "Zettabyte" },
      { is_correct_answer: false, option: "Exabyte" },
    ],
  },
  {
    id: 3,
    level_id: "646efba5c694429b3392b765",
    question: "1 Kilobyte is equal to",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: true, option: "8000 Bits" },
      { is_correct_answer: false, option: "1024 Bits" },
      { is_correct_answer: false, option: "512 Bits" },
      { is_correct_answer: false, option: "None of the above" },
    ],
  },
  {
    id: 4,
    level_id: "646efba5c694429b3392b765",
    question: "Multimedia contains?",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: false, option: "Audio" },
      { is_correct_answer: false, option: "Video" },
      { is_correct_answer: true, option: "Both Audio and Video" },
      { is_correct_answer: false, option: "None of the above" },
    ],
  },
  {
    id: 5,
    level_id: "646efba5c694429b3392b765",
    question:
      "Which key of the keyboard is mainly used to cancel the program?",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: false, option: "Del Key" },
      { is_correct_answer: false, option: "Enter Key" },
      { is_correct_answer: false, option: "Ins Key" },
      { is_correct_answer: true, option: "Esc Key" },
    ],
  },
  {
    id: 6,
    level_id: "646efba5c694429b3392b765",
    question: "When is Rajasthan Information Technology Day celebrated? -",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: true, option: "March 21" },
      { is_correct_answer: false, option: "March 22" },
      { is_correct_answer: false, option: "April 21" },
      { is_correct_answer: false, option: "April 22" },
    ],
  },
  {
    id: 7,
    level_id: "646efba5c694429b3392b765",
    question: "In the context of the Internet, what is the full form of MAN?",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: false, option: "Master Area Network" },
      { is_correct_answer: false, option: "Makeshift Area Network" },
      { is_correct_answer: false, option: "Massive Area Network" },
      { is_correct_answer: true, option: "Metropolitan Area Network" },
    ],
  },
  {
    id: 8,
    level_id: "646efba5c694429b3392b765",
    question: "With reference to the Internet, what is the full form of IP?",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: true, option: "Internet Protocol" },
      { is_correct_answer: false, option: "Intra propaganda" },
      { is_correct_answer: false, option: "Intra protocol" },
      { is_correct_answer: false, option: "Internet Proposal" },
    ],
  },
  {
    id: 9,
    level_id: "646efba5c694429b3392b765",
    question: "The first computer to be used commercially was",
    is_multiple_answer: false,
    interval_time: 10,
    option_array: [
      { is_correct_answer: false, option: "Manic (MANIAC)" },
      { is_correct_answer: false, option: "ENIAC" },
      { is_correct_answer: true, option: "UNIVAC" },
      { is_correct_answer: false, option: "IDSAC" },
    ],
  },
];
