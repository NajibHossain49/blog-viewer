// middleware.js
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export const middleware = withAuth();

export const config = {
  matcher: ["/profile"]
};