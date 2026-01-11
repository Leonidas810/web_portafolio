import Image from "next/image";
import { Icon } from "@/atoms/";

interface Img {
  src: string;
  alt: string;
}

interface CardProps {
  img: Img;
  title: string;
  subTitle: string;
  link: string;
}

export const Card = ({ img, title, subTitle, link }: CardProps) => {
  return (
    <div className="grid gap-y-2 p-3 border-2 shadow-2xl border-[#C5C5C5] rounded-lg">
      {/* Row 1*/}
      <div className="relative h-[140px] w-full bg-red-900 rounded-lg">
        <Image
          fill
          src={img.src}
          alt={img.alt}
          sizes="(max-width: 640px) 200px,
                    (max-width: 1024px) 200px,
                    (max-width: 1536px) 200px,
                    200px"
          className="object-cover rounded-lg"
          priority
        />
      </div>
      {/* Row 2*/}
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl">{title}</h2>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Icon className="text-primary-700" name="url" size="xl" />
          </a>
        </div>
        <p className="text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};
