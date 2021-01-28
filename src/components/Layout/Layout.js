import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';


const layout = (porps) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{porps.children}</main>
  </Aux>
);

export default layout;
