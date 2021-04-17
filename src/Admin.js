import React, { useEffect } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useHistory } from "react-router-dom";

function Admin() {
  let { path, url } = useRouteMatch();
  let history = useHistory();

  useEffect(()=>{
        history.push(url + '/login')
  },[])

  return (
    <div>
      {/* <h1>Admin component</h1> */}

    </div>
  );
}

export default Admin;
