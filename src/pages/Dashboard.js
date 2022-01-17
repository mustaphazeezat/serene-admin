import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardList from '../components/home/CardList'
import Layout from '../components/wrappers/Layout'
import { getReservations } from '../redux/reducers.js/reservations'

const Dashboard = () => {
    const [reservations, setreservations] = useState([])
    const dispatch = useDispatch()
  const { reservation, loading, error} = useSelector((state) => state.reservations)
  
  useEffect(() => {
      dispatch(getReservations())
      setreservations(reservation)
  }, [])

  useEffect(() => {
    setreservations(reservation)
}, [reservation])
    
    return (
        <Layout pageTitle='dashboard'>
            <section className='main-wrapper'>
                {
                 !loading?
                 <div>
                    <h2 className='page-title'>Researvations</h2>
                    <CardList data={reservations}/>
                 </div>
                 :<p>Loading...</p>
                }
                
            </section>
        </Layout>
    )
}

export default Dashboard
