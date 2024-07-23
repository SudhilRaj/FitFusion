import { useState } from 'react';
import {RiDoubleQuotesL} from "react-icons/ri";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";
import { client } from '../data/Data';
import {BsDot} from "react-icons/bs";

const Client = () => {
  const [currSlide,setCurrSlide] = useState(0);

  const prevSlide = () =>{
    const prev = currSlide === 0;
    const index = prev ? client.length - 1  : currSlide - 1;
    setCurrSlide(index);
  }

  const nextSlide = () =>{
    const next = currSlide === client.length - 1;
    const index = next ? 0 : currSlide + 1;
    setCurrSlide(index);
  }

  const dotClick= (i: number) =>{
    setCurrSlide(i);
  }

  return (
    <section id='testimonials' className=' w-full min-h-screen'>
      <div className=' flex justify-between items-center gap-20 max-container padding-hero-y relative max-lg:flex-col padding-x'>
        <div className=' relative flex-1 flex justify-center items-center max-lg:w-full'>
          <img src={client[currSlide].img} alt="clientImg" className='object-cover object-center h-[700px] w-[95%] max-lg:w-full transition-transform ease-in-out duration-200 max-sm:h-[400px]' />
          <RiDoubleQuotesL className=' absolute top-[50%] translate-y-[-50%] -right-[75px] text-[#e94057] text-[180px] max-lg:hidden'/>
        </div>

        <div className=' flex-1'>
          <p className=' text-[#e94057] relative before:absolute before:w-20 before:h-1 before:bg-[#e94057] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>TESTIMONIALS</p>
          <div className=' my-7 text-5xl leading-[60px] font-semibold text-black max-sm:text-3xl'>
            <h1>WHAT OUR HAPPY</h1>
            <h1>CLIENTS SAY</h1>
          </div>

        <div className=' flex relative'>
          <p className='font text-lg text-slate-500 mb-8 w-[85%] max-sm:w-full'>
            {client[currSlide].desc}
          </p>
        </div>

          <h1 className=' text-xl font-semibold flex gap-4 items-center'>{client[currSlide].clientName}<span className=' text-slate-500 text-base'>Footballer</span></h1>
        
          <div className=' flex text-4xl mt-20 justify-start max-lg:mt-5'>
            {client.map((val,index)=>(
              <div key={val.id} onClick={()=>dotClick(index)} className={` cursor-pointer ${currSlide === index ? " text-[#e94057]" : "text-4xl"}`}>
                <BsDot />
              </div>
            ))}
          </div>
        </div>

        <div className=' absolute left-4 max-lg:top-[25%] h-10 w-10 flex justify-center items-center max-lg:left-1 max-lg:-translate-y-[-50%] text-4xl max-lg:text-2xl text-[#e94057] cursor-pointer rounded-full hover:bg-black hover:text-white duration-300 max-sm:top-[460px] max-sm:left-32 max-sm:rounded-full' onClick={prevSlide}>
          <IoIosArrowBack />
        </div>

        <div className=' absolute right-4 max-lg:top-[25%] h-10 w-10 flex justify-center items-center max-lg:right-1 max-lg:-translate-y-[-50%] text-4xl max-lg:text-2xl text-[#e94057] cursor-pointer rounded-full hover:bg-black hover:text-white duration-300 max-sm:top-[460px] max-sm:right-32' onClick={nextSlide}>
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  )
}

export default Client;