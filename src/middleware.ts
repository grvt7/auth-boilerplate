import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logger } from './utils/logger'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   logger.info('request', request)
//   return NextResponse.redirect(new URL('/', request.url))
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }



// import NextAuth from 'next-auth';
// import { authOptions } from './app/api/auth/[...nextauth]/options';
// import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from './utils/routes';
// import { logger } from './utils/logger';

// const { auth } = NextAuth(authOptions);

// export default auth((req: any) => {
//   const { nextUrl } = req;

//   logger.info('request', req);

//   // const isAuthenticated = !!req.auth;
//   // const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

//   // if (isPublicRoute && isAuthenticated)
//   //   return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

//   // if (!isAuthenticated && !isPublicRoute)
//   //   return Response.redirect(new URL(ROOT, nextUrl));
// });

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
