export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard", "/books", "/videos", "/learnings"] }


// TODO: Read it and do
// https://medium.com/@zachshallbetter/protecting-routes-in-next-js-with-app-router-53c3409c0655#:~:text=To%20protect%20routes%20that%20require,two%20hooks%3A%20useRouter%20and%20useEffect%20.