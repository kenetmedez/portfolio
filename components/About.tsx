import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#f0a900] lg:w-full lg:h-screen font-poppins scroll-mt-[150px]"
    >
      <div className="flex justify-start items-start flex-col ">
        <h2 className="font-semibold text-white text-2xl cursor-pointer px-[10%] py-5">
          ABOUT
        </h2>
        {/* <p className="py-5 text-sm duration-700">
          Things i do outside tech world:
        </p> */}
      </div>

      <div className="px-10 flex justify-center lg:flex-row md:flex-row flex-col w-full h-full !duration-1000 gap-5">
        <div className="lg:w-1/2 w-fit flex justify-center">
          <div className="grid grid-cols-2 gap-4  h-fit">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500" />
              <Image
                src="/dota.jpg"
                alt="games"
                width={400}
                height={400}
                className="group-hover:scale-125 transition-all duration-700"
              />
              <div className="absolute -bottom-[200%] left-6 lg:group-hover:bottom-10 group-hover:bottom-1 transition-all duration-700 z-50 cursor-default">
                <p className="text-white leading-normal">
                  <span className="font-kode lg:text-lg md:text-sm text-sm">
                    DOTA: Defense of the Ancients
                  </span>
                  <br />
                  <span className="text-[10px] font-poppins lg:flex hidden">
                    Play online game since grade school. It gives me curiosity
                    about technology.
                  </span>
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500" />
              <Image
                src="/picnic.jpeg"
                alt="games"
                width={400}
                height={400}
                className="group-hover:scale-125 transition-all duration-700"
              />
              <div className="absolute -bottom-[200%] left-6 lg:group-hover:bottom-10 group-hover:bottom-1 transition-all duration-700 z-50 cursor-default">
                <p className="text-white leading-normal">
                  <span className="font-kode  lg:text-lg md:text-sm text-sm">
                    PICNIC: Go outdoors and chill
                  </span>
                  <br />
                  <span className="text-[10px] font-poppins lg:flex hidden">
                    This is my favorite type of break to give time for myself
                    and reflect.
                  </span>
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500" />
              <Image
                src="/clarinet.jpeg"
                alt="games"
                width={400}
                height={400}
                className="group-hover:scale-125 transition-all duration-700"
              />
              <div className="absolute -bottom-[200%] left-6 lg:group-hover:bottom-10 group-hover:bottom-1 transition-all duration-700 z-50 cursor-default">
                <p className="text-white leading-normal">
                  <span className="font-kode lg:text-lg md:text-sm text-sm">
                    Music: Heals my soul
                  </span>
                  <br />
                  <span className="text-[10px] font-poppins lg:flex hidden">
                    Aside from code. I also know how to read notes and play
                    instrument.
                  </span>
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500" />
              <Image
                src="/firstaid.jpeg"
                alt="games"
                width={400}
                height={400}
                className="group-hover:scale-125 transition-all duration-700"
              />
              <div className="absolute -bottom-[200%] left-6 lg:group-hover:bottom-10 group-hover:bottom-1 transition-all duration-700 z-50 cursor-default">
                <p className="text-white leading-normal">
                  <span className="font-kode lg:text-lg md:text-sm text-sm">
                    First Aider: Act as volunteerism
                  </span>
                  <br />
                  <span className="text-[10px] font-poppins lg:flex hidden">
                    I am a trained first aider. In terms of emergency I can help
                    people.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:w-1/2 flex  flex-col items-center">
          <div className="flex flex-col items-center justify-center group">
            <div className="place-items-start grid grid-cols-2 lg:gap-4 md:gap-3 sm:gap-20">
              <Image
                src="/sidemonitor.png"
                alt="monitor screen"
                width={300}
                height={300}
                className=" lg:w-[100%] md:w-[50%] w-[50%]"
              />
              <Image
                src="/monitor.png"
                alt="monitor screen"
                width={300}
                height={300}
                className="lg:w-[100%] md:w-[50%] w-[50%]"
              />
            </div>

            <p className="text-center font-semibold m-0 py-2 cursor-pointer">
              <span className="text-[#b91c1c] text-xl"> Skilled </span>
              <span className="text-[#67e8f9] text-xl">
                {" "}
                Detailed-oriented{" "}
              </span>
              <span className="text-gray-100 lg:text-2xl text-xl group-hover:text-6xl duration-1000">
                {" "}
                Collaborative{" "}
              </span>
              <span className="text-[green] lg:text-2xl text-xl">
                {" "}
                Adaptable{" "}
              </span>

              <span className="text-gray-100 text-lg"> Problem-solvers </span>
              <span className="text-[#65a30d] lg:text-2xl text-xl">
                {" "}
                Analytical{" "}
              </span>

              <span className="text-[yellow] lg:text-2xl text-xl">
                {" "}
                Organized{" "}
              </span>
              <span className="text-[white] lg:text-3xl text-lg">
                {" "}
                Innovative{" "}
              </span>
              <span className="text-[indigo] lg:text-2xl text-lg">
                {" "}
                Passionate{" "}
              </span>
              <span className="text-[red] lg:text-2xl text-lg">
                {" "}
                Responsive{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
