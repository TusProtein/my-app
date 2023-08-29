import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "~/components/Button/Button.module.css";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  rounded = false,
  disable = false,
  text = false,
  primary = false,
  outline = false,
  small = false,
  medium = false,
  iconLeft,
  onClick,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disable) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx("buttonWrapper", {
    rounded,
    disable,
    primary,
    outline,
    text,
    small,
    medium,
  });

  return (
    <Component className={classes} {...props}>
      <div>{children}</div>
    </Component>
  );
}

export default Button;
