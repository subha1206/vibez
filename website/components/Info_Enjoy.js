export default function Info_Enjoy() {
  return (
    <div className="container mdsm:mx-auto lg:flex">
      <div className="lg:flex-1 ">
        <div className="sm:w-4/5 lg:w-3/5 container mt-28 mx-auto">
          <p className="text-red-600 text-base pb-4 text-center lg:text-left">
            Enjoy your virtual space
          </p>
          <h2 className="text-3xl text-center lg:text-left">
            Create/login to an existing account to get started
          </h2>
          <p className="text-s pt-2 lg:w-3/5 text-center lg:text-left">
            An account is created with your email and a desired password
          </p>
        </div>
      </div>
      <div className="lg:flex-1 ">
        <div className="lg:w-3/5 container mx-auto">
          <img src="/images/enjoy.png" alt="Vercel Logo" className="lg:h-96" />
        </div>
      </div>
    </div>
  );
}
