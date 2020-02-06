import * as React from "react";
import Sizes from "../types/Sizes";
import styles from "./Button.module.scss";

type ButtonVariants = "colored" | "outlined"

interface IButtonProps {
  variant: ButtonVariants,
  size?: Sizes,
}

export default class Button extends React.Component<IButtonProps, {}> {
  public render() {
    return (
    <button type="button" className={this.getClasses()}>{this.props.children}</button>
    );
  }
  private getClasses() {
    return `${styles.button} ${this.getVariantClass()} ${this.getSizeClass()}`;
  }
  private getVariantClass() {
    return styles[`__${this.props.variant}`];
  }
  private getSizeClass() {
    return styles[`__${this.props.size}`] || "";
  }
}