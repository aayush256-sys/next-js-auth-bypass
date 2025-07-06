import { NextResponse } from 'next/server'

export function middleware(request) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl
  
  // Check if user is trying to access protected routes
  if (pathname.startsWith('/admin')) {
    // Get the auth cookie
    const authCookie = request.cookies.get('auth')
    
  
    
    // VULNERABLE: Simple string check that can be bypassed
    if (!authCookie ) {
     
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    console.log('✅ Authentication successful - allowing access')
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
} 
