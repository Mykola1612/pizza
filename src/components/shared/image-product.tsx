export const ImageProduct = ({ product, size }) => {
  return (
    <img
      src={product.imageURL}
      alt={product.name}
      className={`block  ${size === 20 ? "w-[300px] h-[300px]" : ""} ${
        size === 30 ? "w-[400px] h-[400px]" : ""
      } ${size === 40 ? "w-[500px] h-[500px]" : ""}`}
    />
  );
};
