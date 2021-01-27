import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from './Layout.css'

const layout = (porps) => (
  <Aux>
    <div>Toolbar, SideDrawer, Bacldrop</div>
    <main className={classes.Content}>{porps.children}</main>
  </Aux>
);

export default layout;
