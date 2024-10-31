import { NextResponse } from 'next/server';

const isLogged = true;

export function middleware(request: Request) {
  // TODO: refactor this
  if (!isLogged && request.url.includes('login')) return NextResponse.redirect('http://localhost:3080/login');
  return NextResponse.next();
}

// export const config = {
//   matcher: ['/']
// };
