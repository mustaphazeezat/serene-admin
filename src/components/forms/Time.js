import React from 'react'
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';

const Time = ({onChange, value}) => {
    return (
        <div className='picker-wraper'>
            <p>Time</p>
            <TimePicker
                onChange={val=>onChange(val)}
                value={value}
                maxTime='22:00:00'
                minutePlaceholder='MM'
                hourPlaceholder='HH'
                className='time-wrapper'
            />
        </div>
    )
}

export default Time
