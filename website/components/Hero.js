export default function Hero() {
  return (
    <div className="container lg:flex pb-12 mx-auto mt-5">
      <div className="lg:flex-1">
        <div className="lg:mt-16 w-4/6 mx-auto">
          <h1 className="lg:text-5xl text-4xl text-center lg:text-left  lg:font-bold tracking-wide leading-normal">
            Find people like you
          </h1>
          <p className=" lg:w-5/6 text-center lg:text-left lg:text-lg mt-5 lg:ml-2">
            Connect with the people who think like you. Follow them for personal
            posts.It facilitates the sharing of ideas, thoughts, and information
            through the building of virtual networks and communities
          </p>
          <div className="rounded-md mt-8">
            <a
              href="#"
              className="lg:w-3/5 flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="lg:w-5/6 container mx-auto mt-14">
          <img src="/images/Humaaans.png" alt="Vercel Logo" className="" />
        </div>
      </div>
    </div>
  );
}
