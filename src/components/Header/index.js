import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col mt-16">
      <img src="https://world19covid.web.app/static/media/image.d7265326.png" alt="covid-19 header" className="w-fit mx-auto"/>
      <div className="text-center mt-3">
        <h3 className="font-bold">Global and Country Wise Cases of Corona Virus</h3>
        <p className="mt-3 italic">(For a Particular country, select a Country from below)</p>
      </div>
    </div>
  )
}

export default Header