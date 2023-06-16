import React from 'react'
import { useSelector } from 'react-redux'

const CountryCards = () => {
    const { countries } = useSelector(state => state.searchCountries)

    return (
        <div className='dashBoardSec container'>
            <div className="countryDetails">
                <div className='Cards row'>
                    {
                        countries && countries?.map((data, i) => {
                            return (
                                <div className="col-6 mb-3">
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
        </div>
    )
}

export default CountryCards