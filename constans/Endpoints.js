
//  .env => proccess.env exported
const e = process.env;

export const mongoURI = e.NEXT_PUBLIC_MONGO_URI

// baseUrl
export const baseUrl = e.NEXT_PUBLIC_BASE_URL

// schedule Start
export const scheduleCreateGet = e.NEXT_PUBLIC_SCHEDULE_CREATE_GET
export const scheduleActions = e.NEXT_PUBLIC_SCHEDULE_ACTIONS
// schedule End

// course Start here
export const courseCreateGet = e.NEXT_PUBLIC_COURSE_CREATE_GET
export const courseActions = e.NEXT_PUBLIC_COURSE_ACTIONS
// course End here

//  student Start
export const studentCreateGet = e.NEXT_PUBLIC_STUDENT_CREATE_GET
export const studentActions = e.NEXT_PUBLIC_STUDENT_ACTIONS
//  student End

//  fees Start
export const feesCreateGet = e.NEXT_PUBLIC_FEES_CREATE_GET_ALL
export const feesGetBySearch = e.NEXT_PUBLIC_FEES_GET_BY_SEARCH
//  fees End






/**
 * Pages start here
 */
export const pageCreate = e.NEXT_PUBLIC_PAGE_CREATE
export const pageGetOne = e.NEXT_PUBLIC_PAGE_GET_ONE

/**
 * Pages End here
 */