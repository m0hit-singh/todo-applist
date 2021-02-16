import React from "react";
import { Button } from "@material-ui/core";
import * as Actions from "../../../library/security/store/actions";
import { useDispatch } from "react-redux";

function HeaderComponent() {
  const dispatch = useDispatch();
  return (
    <div className="header">
      {/* <Button>Home</Button> */}
      {/* <Button
        onClick={() => {
          dispatch(Actions.logout());
        }}
      >
        Logout
      </Button> */}
    </div>
  );
}

export default HeaderComponent;
