import { Dimensions } from 'react-native';
import en from '../assets/languages/en.json';
import { ICONS } from './images';

const screen = Dimensions.get('window');
export const BASE_URL = 'http://192.168.1.165:4000';

export const API_ERROR_MESSAGE = 'Something wents wrong';

export const LANGUAGE_CONFIGRATION = {
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: en,
    },
    interpolation: {
        escapeValue: false // react already safes from xss
    }
};

export const QUIZ_CATEGORY = [
    {id:1,image:ICONS.email,name:'Math',total_quizzes:21},
    {id:2,image:ICONS.email,name:'Sports',total_quizzes:18},
    {id:3,image:ICONS.headphone,name:'Music',total_quizzes:12},
    {id:4,image:ICONS.email,name:'Science',total_quizzes:15},
    {id:5,image:ICONS.email,name:'Art',total_quizzes:11},
    {id:6,image:ICONS.email,name:'Travel',total_quizzes:14},
    {id:7,image:ICONS.email,name:'History',total_quizzes:7},
    {id:8,image:ICONS.email,name:'Tech',total_quizzes:8},
]