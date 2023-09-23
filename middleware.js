import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.redirect(new URL('/home', request.url))
}


//export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }


// TODO: Read it and do
// https://medium.com/@zachshallbetter/protecting-routes-in-next-js-with-app-router-53c3409c0655#:~:text=To%20protect%20routes%20that%20require,two%20hooks%3A%20useRouter%20and%20useEffect%20.