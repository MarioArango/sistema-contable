'use client'

import { encrypt, decrypt } from './index'
import { message } from "antd"
import platform from 'platform'

type MessagesAntd = 'success' | 'warning' | 'info' | 'error'
export const showMessage = async (description: string, type: MessagesAntd = 'success', duration = 3) => {
  try {
    message[type](description, duration)
  } catch (error) {
    // console.log(error)
  }
}


export const setLocalStorage = <T>(name: string, value: T, isEncrypted: boolean = false) => {
  if(isEncrypted){
    const val = value as string
    localStorage.setItem(name, val)
  }else {
    localStorage.setItem(name, encrypt(value??''))
  }
}

export const getLocalStorage = <T,>(name: string, requireDecrypt: boolean = true): T | null => {
  if (typeof window !== "undefined") {
    let value: T | null
    if(!requireDecrypt){
      const val = localStorage.getItem(name)? localStorage.getItem(name) : null;
      value = val as T
    }else {
      value = localStorage.getItem(name) ? decrypt(localStorage.getItem(name) ?? '') ?? null : null;
    }
    return value
  }else {
    return null
  }
}

export const clearLocalStorage = () => {
  localStorage.clear()
}

export const setSessionStorage = <T>(name: string, value: T) => {
  sessionStorage.setItem(name, encrypt(value??''))
}

export const getSessionStorage = <T>(name: string): T | null => {
  const value = decrypt(sessionStorage.getItem(name)?? '')??null
  return value
}

export const clearSessionStorage = () => {
  sessionStorage.clear()
}

type UserIp = { ip: string }
export const getIpUser = async (): Promise<UserIp> => {
  const res = await fetch('https://api.ipify.org/?format=json')
  const data = await res.json() as UserIp
  return data
}

type UserNavigator = { browser: string, device: string }
export const getNavigator = (): UserNavigator => {
  return {
    browser: platform.name??'',
    device: platform.os?.family??'' + '/' + platform.os?.version??'' + '/' + platform.os?.architecture??''
  }
}

//ONLY ACEPT HTTPS
type UserGeolocation = { latitude: number, longitude: number }
export const getGeolocation = (): UserGeolocation => {
  let latitude = 0
  let longitude = 0
  window.navigator?.geolocation?.getCurrentPosition((position) => {
    latitude = position?.coords?.latitude?? 0,
    longitude = position?.coords?.longitude?? 0
  })
  return {
    latitude,
    longitude
  }
}