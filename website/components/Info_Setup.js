export default function Info_Setup() {
  return (
    <div className="container mdsm:mx-auto lg:flex mx-auto">
      <div className="lg:flex-1">
        <div className="sm:w-4/5 lg:w-3/5 container mt-20 mx-auto">
          <p className="text-red-600 text-base pb-4 text-center lg:text-left">
            Personalized your profile
          </p>
          <h2 className="text-3xl text-center lg:text-left">
           Add post or friends
          </h2>
          <p className="text-s pt-2 lg:w-3/5 text-center lg:text-left">
            Your personal virtual place created with your choices
          </p>
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="lg:w-3/5 container mx-auto">
          <img
            src="/images/setup.png"
            alt="Vercel Logo"
            className="mx-auto mt-5 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
