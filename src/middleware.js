import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
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