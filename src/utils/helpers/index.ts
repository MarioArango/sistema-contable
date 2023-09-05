import CryptoJS from 'crypto-js';
import { secretEncrypt } from '../config';


export const getRules = (message: string) => {
  return [{ required: true, message }]
}


export const encrypt = (text: string | object) => {
  try {
    const textToEncrypt = typeof text === 'string' ? text : JSON.stringify(text);
    const encryptedText = CryptoJS.AES.encrypt(textToEncrypt, secretEncrypt).toString();
    return encryptedText ?? '';
  } catch (error) {
    return '';
  }
};

export const decrypt = (ciphertext: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretEncrypt);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText.includes('{') || originalText.includes('[') ? JSON.parse(originalText) : originalText;
  } catch (_e) {
    return '';
  }
};

export const dateFormatList = [
  'DD/MM/YYYY',
  'YYYY-MM-DD',
  'DD/MM/YYYY HH:mm:ss',
  'YYYY-MM-DD HH:mm:ss',
  'DD/MM/YYYY HH:mm',
  'YYYY-MM-DD HH:mm',
  'DD/MM/YYYY HH:mm A',
  'YYYY-MM-DD HH:mm:ss a',
  'HH:mm:ss',
  'HH:mm',
  'YYYYMMDD',
];
