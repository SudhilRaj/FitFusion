const Offer = () => {
  return (
    <section className=' w-full bg-sky-950'>
      <div className=' max-container flex justify-between items-center text-white py-28 max-lg:py-24 max-md:flex-col max-md:items-start max-md:gap-5 max-md:py-16 max-sm:py-12 padding-x'>
        <div className=' text-6xl font-semibold leading-[70px] max-lg:text-4xl max-w-[50%] max-lg:max-w-[100%] max-sm:text-3xl'>
          <h1>Try your first training for free for one month</h1>
        </div>

          <button className=' py-4 px-9 text-xl group relative text-white bg-color-pattern rounded-sm'>
            <div className=' buttonDiv'></div>
            <span className='buttonSpan'>JOIN NOW</span>
          </button>
      </div>
    </section>
  )
}

export default Offer;