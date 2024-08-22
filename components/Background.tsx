import Image from "next/image";

export default function Background() {
  return (
    <section
      className="w-full relative bg-gray-100/50 py-10 max-w-[1650px] mx-auto"
      id="about"
    >
      <div className="w-full flex items-center justify-center mx-auto">
        <Image
          width={300}
          height={100}
          src="/diploma.png"
          alt="gradaution"
          className="md:w-1/3 w-1/2 md:-top-28 top-0 mx-auto object-cover z-10 absolute"
        />
      </div>

      <div className="w-full relative max-w-[1650px] mx-auto">
        <div className="md:w-10/12 w-full mx-auto">
          <div className="md:w-9/12 w-full px-4 mx-auto mt-4">
            <h2 className="font-second text-primary text-3xl">Education</h2>
            <div className="h-[3px] bg-primary w-[50px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
