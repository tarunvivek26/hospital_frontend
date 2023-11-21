import React from 'react'
import './faq.css'
import faqImg from './faq.jpg'

import FaqList from './faqlist';
const faqhome = () => {
  return (
    <section>
            <div className='flex justify-between gap-[50px] lg:gap-0' style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div className='w-1/2 '>
                    <img src={faqImg} alt='image' height='100%'width='400px'></img>
                </div>

                <div className='w-full w-1/2'>
                    <h2 className='heading' >
                    Most questions by our beloved patients
                    </h2>
                    <FaqList className='listitems'/>
                </div>
            </div>
    </section>
  )
}

export default faqhome