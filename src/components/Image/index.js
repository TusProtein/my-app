import { forwardRef, useState } from "react";
import image from "~/img/item-default.svg";
function Image({ src, alt, fallback: customFallback = image, ...props }, ref) {
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

export default forwardRef(Image);
