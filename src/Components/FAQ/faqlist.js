// import React from 'react'
import { faqs } from './faqs'
import FaqItem from './faqitem'

const faqlist = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,index)=> (
        <FaqItem item={item} key={index}/>
        ))}
    </ul>
  );
};

export default faqlist;