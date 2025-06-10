interface Props {
  imageURL: string;
  name: string;
  size: 20 | 30 | 40;
}

export const ImageProduct: React.FC<Props> = ({ imageURL, name, size }) => {
  return (
    <img
      src={imageURL}
      alt={name}
      className={`block  ${size === 20 ? "w-[300px] h-[300px]" : ""} ${
        size === 30 ? "w-[400px] h-[400px]" : ""
      } ${size === 40 ? "w-[500px] h-[500px]" : ""}`}
    />
  );
};
