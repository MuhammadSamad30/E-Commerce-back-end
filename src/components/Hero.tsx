import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-[10%] py-20 bg-[#f0d9d9a4]">
      <div className="text-center md:text-left max-w-md md:pl-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
          Rocket single seater
        </h1>
        <Link href={"/product"} className="text-lg pl-2 underline font-medium hover:text-gray-700">
          Shop Now
        </Link>
      </div>

      <div className="mt-8 md:mt-0" id="hero-img">
        <Image
          src="/hero-img.png"
          alt="Rocket single seater"
          className="w-full max-w-lg md:max-w-4xl"
          width={800}
          height={600}
          priority 
        />
      </div>
    </section>
  );
}
