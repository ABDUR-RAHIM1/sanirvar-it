
//  .env => proccess.env exported
const e = process.env;

export const mongoURI = e.NEXT_PUBLIC_MONGO_URI

// baseUrl
export const baseUrl = e.NEXT_PUBLIC_BASE_URL

// course Start here
export const courseCreateGet = e.NEXT_PUBLIC_COURSE_CREATE_GET
export const courseActions = e.NEXT_PUBLIC_COURSE_ACTIONS
// course End here