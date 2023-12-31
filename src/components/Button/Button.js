import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "~/components/Button/Button.module.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

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
  iconRight,
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
      {iconLeft && <div className="w-[20px]">{iconLeft}</div>}
      <div>{children}</div>
      {iconRight && <div className="w-[20px]">{iconRight}</div>}
    </Component>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  rounded: PropTypes.bool,
  disable: PropTypes.bool,
  text: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
