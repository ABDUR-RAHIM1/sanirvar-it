"use client"
import { postAction } from '@/actions/postAction';
import { studentActions } from '@/constans/Endpoints';
import { globalContext } from '@/ContextApi/ContextApi';
import React, { useContext, useState } from 'react'

export default function RegistrationStatus({ student }) {
    const { showToast } = useContext(globalContext);
    const [status, setStatus] = useState(student.registrationStatus || "");

    const [ loading, setLoading ] = useState(false)

    const handleStatusChange = async (studentId, statusValue) => {
        setStatus(statusValue);
        setLoading(true);
        try {

            const payload = {
                method: "PUT",
                endPoint: studentActions + studentId,
                body: { registresionStatus: statusValue }
            }

            const { status, data } = await postAction(payload)

            showToast(status, data);

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <select
            className={`${status === "requested"
                ? "bg-red-100 text-red-500"
                : status === "registered"
                    ? "text-yellow-500 bg-yellow-50"
                    : "text-blue-500 bg-blue-100"
                } p-1 rounded-md`}
            value={status}
            onChange={(e) => handleStatusChange(student._id, e.target.value)}
        >
            {
                loading ?
                        <option value="">Please Wait</option>
                    :
                    <>
                        <option value="requested">Requested</option>
                        <option value="registered">Registered</option>
                        <option value="admited">Admited</option>
                    </>
            }
        </select>
    );
}
