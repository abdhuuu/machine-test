import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDatas } from '../redux/dataSlice'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import Header from './Header'

const Common = (props) => {


    const dispatch = useDispatch()
    const { countries } = useSelector(state => state.searchCountries)

    const [filteredDatas, setFilteredDatas] = useState([])
    

    useEffect(() => {
        filtered()
    }, [props.name, countries])

    const filtered = () => {
        if (props.name) {
            const data = countries?.filter(country => country?.region == props.name)
            setFilteredDatas([...data])
        }
        else {
            setFilteredDatas(countries)
        }
    }
    return (
        <div className='dashBoardSec container'>
            <Header />

            <div className="countryDetails">
                <div className='Cards row'>
                    {

                        filteredDatas && filteredDatas?.map((data, i) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3">
                                    <div className="countryDatas">
                                        <div className="imgSec">
                                            <img src={data?.flag} />
                                        </div>
                                        <div className="continent">
                                            <h6>{data?.name}</h6>
                                            <p>{data?.region}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Common