import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 
    text-gray-600'>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold '>About</h5>
            <p>How airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold '>Community</h5>
            <p>Accesibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone </p>
            <p>Referrals accepted</p>
            <p>Papafam</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold '>Most</h5>
            <p>Papa React</p>
            <p>Presents</p>
            <p>Zero to full stack hero</p>
            <p>Hundreds of Students</p>
            <p>AJoin now</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold '>Support</h5>
            <p>Help Center</p>
            <p>Trust and Safety</p>
            <p>Say Hi Youtube</p>
            <p>Easter Eggs</p>
            <p>For the win</p>
        </div>
        

    </div>


  )
}

export default Footer