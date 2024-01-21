import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink
    to="/"
    exact
    style={{background: "darkblue"}}
    >
      Home
   </NavLink>
    <Navlink
    to="/movies"
    exact
    style={{background: "darkblue"}}
    >
      Movies
</Navlink>
<NavLink
to="/directors"
exact
style={{background: "darkblue"}}
>
Directors
</NavLink>
<NavLink
to="/actors"
exact
style={{background: "darkblue"}}

>
Actors
</NavLink>
    
</div>;
}

export default NavBar;
