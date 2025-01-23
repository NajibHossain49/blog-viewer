import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // return NextResponse.next();
    const res=NextResponse.next();
    // Add CORS headers
    response.headers.set("Access-Control-Allow-Origin", "https://blog-viewer-livid.vercel.app");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return res;
  },
  {
    // Add the routes to protect
    callbacks: {
      authorized: ({ req }) => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/profile"],
};

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