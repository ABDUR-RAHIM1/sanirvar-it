import React from 'react'
import AddTrainers from './AddTrainers'
import ViewTrainers from './ViewTrainers'

export default function Trainers() {
    return (
        <div className=' pageStyle overflow-hidden py-10'>
            <AddTrainers />
            <ViewTrainers />
        </div>
    )
}
