interface ImgProps {
  src: string;
}

export const Img = ({ src }: ImgProps) => {
  return <img src={src} />;
};
