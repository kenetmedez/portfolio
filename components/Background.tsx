import Image from "next/image";
import Link from "next/link";

export default function Background() {
  return (
    <section
      className="w-full relative bg-gray-100/50 py-10 max-w-[1650px] mx-auto cursor-default scroll-mt-14"
      id="about"
    >
      <div className="w-full relative max-w-[1650px] mx-auto">
        <div className="lg:max-w-[66%] w-full mx-auto lg:px-0 px-4">
          <div className="header mb-4">
            <h2 className="font-second text-primary text-3xl">Background</h2>
            <div className="h-[3px] bg-primary w-[50px] mb-6" />
            <h3 className="font-second text-xl">Education</h3>
          </div>

          {/* <div className="description grid md:grid-cols-3 grid-cols-1 gap-2"> */}
          <div className="description w-full flex md:flex-row flex-col md:items-center items-start justify-between gap-2">
            <div className="school-background mb-4 md:mb-0">
              <div className="school-name mb-3">
                <div className="year md:mb-1">
                  <span className="font-second text-black text-md tracking-widest">
                    2024
                  </span>
                  <div className="md:block hidden h-[3px] bg-primary w-[20px]" />
                </div>

                <div className="school mb-3">
                  <a
                    href="https://usc.edu.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-black font-second lg:text-xl text-lg mb-2 hover:underline">
                      University of San Carlos
                    </h3>
                  </a>
                </div>
              </div>

              <div className="course mb-3">
                <div className="md:mb-1">
                  <span className="font-second text-black text-md tracking-widest">
                    CCT
                  </span>
                  <div className="md:block hidden h-[3px] bg-primary w-[20px]" />
                </div>

                <div className="text-black font-second lg:text-xl text-lg !leading-5">
                  <h3>Certificate of Computer Technology</h3>
                  <h4 className="mb-2 text-sm">Major in Web Development</h4>
                </div>
              </div>

              <div className="department mb-3">
                <div className="md:mb-1">
                  <span className="font-second text-black text-md tracking-widest">
                    DCISM
                  </span>
                  <div className="md:block hidden  h-[3px] bg-primary w-[20px]" />
                </div>
                <a
                  href="https://www.dcism.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-second lg:text-xl text-lg !leading-5 hover:underline"
                >
                  <h3>Department of Computer,</h3>
                  <h3>Information Sciences and</h3>
                  <h3>Mathematics</h3>
                </a>
              </div>
            </div>

            <div className="school_projects">
              <div className="school_content">
                <div className="header mb-2">
                  <span className="font-second md:text-black text-primary lg:text-xl text-2xl">
                    School Projects
                  </span>
                  <div className="h-[3px] bg-primary md:w-[20px] w-[30px]" />
                </div>

                <div className="project-list lg:ml-0 ml-4 ">
                  <div className="flex flex-col mb-3">
                    <a
                        href="https://agrizone.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-start justify-start mb-1 gap-x-2"
                      >
                    <h3 className="font-second items-center lg:text-xl text-lg hover:underline">
                      Agrizone &mdash;
                    </h3>

                    <h2 className="tracking-widest ml-6">
                      <span className="font-second lg:text-sm">Ecommerce</span>
                    </h2>
                    </a>
                  </div>

                  <div className="flex flex-col mb-3">
                    {/* <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-start mb-1 gap-x-2"
                      > */}
                    <h3 className="font-second items-center lg:text-xl text-lg hover:underline">
                      Cebu Medical Care &mdash;{" "}
                    </h3>
                    <span className="tracking-widest">
                      <span className="font-second ml-6 lg:text-sm">Hospital Appointment</span>
                    </span>
                    {/* </a> */}
                  </div>

                  <div className="flex flex-col mb-3">
                    {/* <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-start mb-1 gap-x-2"
                      > */}
                    <h3 className="font-second items-center lg:text-xl text-lg hover:underline">
                      LiBro  &mdash;
                    </h3>
                    <span className="tracking-widest">
                      <span className="font-second lg:text-sm ml-6">
                        Library Management System
                      </span>
                    </span>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="school_intership">
              <div className="school_content">
                <div className="year mb-2">
                  <span className="font-second md:text-black text-primary lg:text-xl text-2xl">
                    Internship
                  </span>
                  <div className="h-[3px] bg-primary md:w-[20px] w-[30px]" />
                </div>

                <div>
                  <div>
                    <a
                      href="https://www.webriq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center justify-start mb-1 gap-x-2"
                    >
                      <h3 className="font-second items-center lg:text-xl text-lg hover:underline">
                        WebriQ
                      </h3>
                      <span className="tracking-widest">
                        &mdash; <span className="font-second">1440 hrs</span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <ul className="lg:text-md md:pl-6 pl-3">
                      <li>
                        &mdash;{" "}
                        <span className="font-second">Web Developer</span>
                      </li>
                      <li>
                        &mdash;{" "}
                        <span className="font-second">Front-End Developer</span>
                      </li>
                      <li>
                        &mdash;{" "}
                        <span className="font-second">NextJS Framework</span>
                      </li>
                      <li>
                        &mdash; <span className="font-second">Storybook</span>
                      </li>
                      <li>
                        &mdash; <span className="font-second">SEO</span>
                      </li>
                      <li>
                        &mdash;{" "}
                        <span className="font-second">
                          Content Management System
                        </span>
                      </li>
                      <li>
                        &mdash;{" "}
                        <span className="font-second">
                          Continuous Deployment
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
