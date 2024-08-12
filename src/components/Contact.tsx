import contactImg from "../assets/contact.webp";

const Contact = () => {
  return (
    <section id="contact" className="w-full mb-6">
      <div className="max-w-[1500px] m-auto grid grid-cols-2 items-center gap-10 py-0 max-xl:pt-[100px] max-lg:pt-[0px] max-lg:pb-[60px] max-md:pt-[0px]max-md:pb-[70px] max-lg:grid-cols-1 max-lg:gap-6 padding-x">
        <div className="w-full h-[80%]">
          <img
            src={contactImg}
            alt="ContactImg"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="px-5 max-lg:px-0">
          <p className="w-fit text-[#e94057] relative before:absolute before:w-20 before:h-1 before:bg-[#e94057] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] ">
            CONTACT
          </p>

          <div className="text-5xl font-semibold leading-[70px] mt-5 mb-20 max-xl:leading-[50px] max-xl:mb-10 max-sm:text-3xl">
            <h1>KEEP IN TOUCH</h1>
            <h1>WITH US!</h1>
          </div>

          <div className="grid grid-cols-2 gap-14 max-xl:gap-10 max-lg:gap-14 max-md:grid-cols-1 max-sm:w-[90%] max-sm:m-auto">
            <input type="text" placeholder="Name" className="input" />
            <input type="text" placeholder="Phone" className="input" />
            <select className=" input text-slate-500 text-lg">
              <option value="Cardio">Cardio</option>
              <option value="Chest">Chest</option>
              <option value="Shoulder">Shoulder</option>
              <option value="Triceps">Triceps</option>
              <option value="Mind">Mind</option>
            </select>

            <input type="email" placeholder="Email" className=" input" />
            <textarea
              placeholder="Message"
              className=" h-36 input resize-none col-span-2 max-md:col-span-1"
            ></textarea>
          </div>
          <button className="mt-20 py-4 px-9 text-xl group relative text-white bg-color-pattern rounded-sm max-xl:mt-10">
            <div className="buttonDiv"></div>
            <span className="buttonSpan">SEND MESSAGE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
