// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     return NextResponse.next();
//   },
//   {
//     // Add the routes to protect
//     callbacks: {
//       authorized: ({ req }) => {
//         return true;
//       },
//     },
//   }
// );


import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // You can add custom logic here if needed
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // This ensures that only authenticated users can access protected routes
        return token !== null;
      },
    },
  }
);

export const config = {
  matcher: ['/profile'] // Specify which routes should be protected
};
// export const config = {
//   matcher: ["/profile"],
// };

// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     const isAuthenticated = req.cookies.get('kinde_token') != null;
    
//     if (!isAuthenticated) {
//       return NextResponse.redirect(new URL('/api/auth/login', req.url));
//     }

//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ req }) => {
//         return req.cookies.get('kinde_token') != null;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ["/profile"],
// };

