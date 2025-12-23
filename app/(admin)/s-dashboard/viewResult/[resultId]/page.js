import { getSingelResult } from '@/fetch/results'
import React from 'react'
import DetailsOfResult from '@/components/results/DetailsOfResult'

export default async function ResultDetails({ params }) {
    const { resultId } = await params
    const { status, data } = await getSingelResult(resultId)
 

    return <DetailsOfResult
        status={status}
        result={data}
    />
}
