import aboutImg from "../assets/about.webp";

const About = () => {
  return (
    <section id="about" className="w-screen min-h-screen">
      <div className="max-container flex justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col">
        <div className="flex-1 w-full">
          <div className="bg-color-pattern flex justify-end pt-10 pl-10 max-sm:pt-5 max-sm:pl-5">
            <img
              src={aboutImg}
              alt="aboutImg"
              className=" object-cover object-center max-lg:w-full"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className=" text-[#e94057] relative before:absolute before:w-20 before:h-1 before:bg-[#e94057] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]">
            OUR LEGACY
          </p>

          <div className="my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl">
            <h1>
              KEEP YOU BODY FIT AND STRONG, AND THUS THE MIND! LOREM IPSUM SIT
              AMIT!
            </h1>
          </div>

          <p className="font text-lg text-slate-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p className="font text-lg text-slate-500 mt-5 mb-14  max-xl:mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <button className="py-4 px-9 text-xl group relative text-white bg-color-pattern rounded-sm">
            <div className="buttonDiv"></div>
            <span className="buttonSpan">JOIN NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
