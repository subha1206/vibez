export default function Hero() {
  return (
    <div className="container lg:flex h-screen mx-auto">
      <div className="lg:flex-1">
        <div className="lg:mt-16 w-5/6 mx-auto">
          <h1 className="lg:text-5xl text-4xl text-center lg:text-left  lg:font-bold tracking-wide leading-normal">
            Lets create something Together
          </h1>
          <p className=" lg:w-5/6 text-center lg:text-left lg:text-lg mt-5 lg:ml-2">
            Length and appearance do not determine whether a section in a paper
            is a paragraph. For instance, in some styles of writing,
            particularly journalistic styles, a paragraph can be just one
            sentence long. Ultimately, a paragraph is a sentence or group of
            sentences that support one main idea.
          </p>
          <div class="rounded-md mt-8">
            <a
              href="#"
              class="lg:w-2/5 flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
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
