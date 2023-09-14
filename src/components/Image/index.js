import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import image from "~/assets/img/item-default.svg";
const Image = forwardRef(
  ({ src, alt, fallback: customFallback = image, ...props }, ref) => {
    const [fallBack, setFallBack] = useState("");

    const handleImgDefault = () => {
      setFallBack(customFallback);
    };

    return (
      <img
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleImgDefault}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};
export default Image;
