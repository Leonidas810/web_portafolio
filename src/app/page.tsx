import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full grid grid-cols-2 items-center justify-items-center">
        {/*Left */}
        <div className="">
          <div className="text-white">
            <h2 className="text-4xl">Hello, I'm Leonardo Lopez P.</h2>
            <h1 className="text-9xl"><b>Fullstack</b></h1>
            <h1 className="text-[#2D5576] text-9xl"><b>Developer</b></h1>
          </div>
          <div className="grid gap-x-2">
            
          </div>
        </div>
        {/*Right */}
        <div className="">
          <div className="bg-[#3A6D98] border-4 border-white">
            <Image
              src={"/img/ProfileImg.webp"}
              width={600}
              height={5000}
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
