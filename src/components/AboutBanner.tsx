import { FaCheckCircle, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
export default function AboutBanner() {
  return (
    <section className="relative ">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('')",
          }}
        >
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Connecting Hearts with Happy Homes for Pet
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  "At Happy Pets, we bridge the gap between loving families and
                  pets in need. Experience a seamless journey to find your
                  perfect furry companion or provide a forever home for pets
                  awaiting adoption."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10  -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <FaShieldAlt className="w-6 h-6" />
                  </div>

                  <h6 className="text-xl font-semibold">Reliable Platform</h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Happy Pets ensures a safe and trustworthy environment for
                    pet adoption, helping you find your new best friend.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <FaHandsHelping className="w-6 h-6" />
                  </div>
                  <h6 className="text-xl font-semibold">Community Driven</h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Join a compassionate community dedicated to improving the
                    lives of pets through adoption and care.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <FaCheckCircle className="w-6 h-6" />
                  </div>
                  <h6 className="text-xl font-semibold">Verified Listings</h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Every pet listed for adoption on Happy Pets is thoroughly
                    verified to ensure happy and healthy companions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
