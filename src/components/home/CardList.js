import React from 'react'
import ReserveCard from './ReserveCard'


const CardList = ({data}) => {
    const family = data.filter(item => item.familyTime !== "")
    const familyOpen = data.filter(item => item.familyTime !== "" && item.familyType === "open")
    const familyPrivate = data.filter(item =>item.familyTime !== "" && item.familyType === "private")
    const table = data.filter(item => item.table !== 0)
    const tableTwo = data.filter(item => item.table === 2)
    const tableFour = data.filter(item => item.table === 4)
    const single = data.filter(item => item.table === 0 && item.familyTime === "")
    console.log(familyOpen, familyPrivate, tableFour, tableTwo, single)
    return (
        <ul className='reservation-summary-list grid grid-3'>
            <li className=''>
                <h3>
                    <span>{family.length}</span> <br/>
                    Family
                </h3>
                <div className='d-flx-alc-jsb'>
                    <p>
                        <span>{familyOpen.length}</span> <br/>
                        open
                    </p>
                    <p>
                        <span>{familyPrivate.length}</span> <br/>
                        private
                    </p>
                </div>
            </li>
            <li>
                <h3>
                    <span>{table.length}</span> <br/>
                    table
                </h3>
                <div  className='d-flx-alc-jsb'>
                    <p>
                        <span>{tableFour.length}</span> <br/>
                        table for 4
                    </p>
                    <p>
                        <span>{tableTwo.length}</span> <br/>
                        table for 2
                    </p>
                </div>
            </li>
            <li>
                <h3>
                    <span>{single.length}</span> <br/>
                    single
                </h3>
               
            </li>

        </ul>
    )
}

export default CardList
