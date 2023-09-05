import { decrypt } from '@/utils/helpers'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {

  //REDIRECT WITH TOKEN OR PUBLIC
  const routesPublic = [
    `/`,
    `/sign-in`,
    `/sign-up`,
    `/forgot-password`,
  ]
  if (req.cookies.has('logged')) {
    const cookieToken = decrypt(req?.cookies?.get('logged')?.value??'')
    if(process?.env?.SECRET_LOGGED_COOKIE === cookieToken){
      if (routesPublic.includes(req.nextUrl.pathname)) {
        return NextResponse.rewrite(new URL(`/home`, req.url))
      }
    }else {
      return NextResponse.rewrite(new URL(`/`, req.url))
    }
  }else {
    if(!routesPublic.includes(req.nextUrl.pathname)){
      return NextResponse.rewrite(new URL(`/`, req.url))
    }
  }

  return NextResponse.next()
}