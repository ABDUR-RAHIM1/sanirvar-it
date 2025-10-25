import { NextResponse } from 'next/server';

/**
 * @param {object} data - The data payload to return.
 * @param {number} status - The HTTP status code (default is 200).
 * @returns {NextResponse}
 */
export const successResponseWithMessage = (message, status = 200) => {
    return NextResponse.json(
        {
            success: true,
            message: message
        },
        { status }
    );
};


export const successResponseWithData = (data, status = 200) => {
    return NextResponse.json(data,
        { status }
    );
};


/**
 * @param {string} message - The error message.
 * @param {number} status - The HTTP status code (default is 500).
 * @returns {NextResponse}
 */
export const errorResponse = (message, status = 500) => {
    return NextResponse.json(
        {
            success: false,
            message: message
        },
        { status }
    );
};