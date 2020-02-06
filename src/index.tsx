import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/global.scss";
import Button from "./components/Button/Button";
import WrappingGroup from "./components/WrappingGroup/WrappingGroup";

const test =
<WrappingGroup>
  <Button variant="colored" size="sm">YES</Button>
  <Button variant="outlined" size="lg">NO</Button>
  <Button variant="outlined">KETCHUP</Button>
  <Button variant="outlined">ABC</Button>
  <Button variant="outlined">DEF</Button>
  <Button variant="outlined">GHI</Button>
  <Button variant="outlined">JKL</Button>
  <Button variant="outlined">MNO</Button>
  <Button variant="outlined">PQR</Button>
  <Button variant="outlined">STU</Button>
  <Button variant="outlined">VWX</Button>
  <Button variant="outlined">YZ</Button>
</WrappingGroup>

ReactDOM.render(test, document.querySelector("#test"));
