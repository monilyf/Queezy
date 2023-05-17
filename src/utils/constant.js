import { Dimensions } from 'react-native';
import en from '../assets/languages/en.json';

const screen = Dimensions.get('window');
export const BASE_URL = 'http://192.168.1.165:4000';

export const API_ERROR_MESSAGE = 'Something wents wrong';

export const LANGUAGE_CONFIGRATION = {
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: en,
        gu: gu
    },
    interpolation: {
        escapeValue: false // react already safes from xss
    }
};