import * as React from "react";
import styles from "./WrappingGroup.module.scss";

interface IWrappingGroupProps {
}

export default class WrappingGroup extends React.Component<IWrappingGroupProps, {}> {
  public render() {
    return (
  <div className={styles.wrappingGroup}>{this.props.children}</div>
    );
  }
}