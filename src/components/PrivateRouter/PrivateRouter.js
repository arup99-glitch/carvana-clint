import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../utilities/context/useAuth";
/* private route  */
const PrivateRouter = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { form: location } }}
            ></Redirect>
          )
        }
      ></Route>
    );
  }
};

export default PrivateRouter;
