import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  
  // const url = request.url;
  // const regex = /.*\/resume\/([^\/]+)\/([^\/]+)$/;
  // const match = url.match(regex);

  // if (match) {
  //     const firstname = match[2];
  //     const lastname = match[1];
  //     if(firstname === process.env.RESUME_FIRSTNAME && lastname === process.env.RESUME_LASTNAME) {
  //       return ;
  //     }

  //     return NextResponse.redirect(request.nextUrl.origin+"/resume/404/404");
  // } else {
  //     console.log("No match found");
  // }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/resume/:lastname/:firstname',
}