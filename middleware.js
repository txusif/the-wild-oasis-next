// import { NextResponse } from "next/server";
import { auth } from "@/app/_lib/auth";

// export default function Middleware(request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }

export const middleware = auth;

export const config = {
  // matcher: ["/account"],
  matcher: ["/accoun"],
};
