import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import logo from "../../images/btn.png";
import useAuth from "../../utilities/context/useAuth";
// import { useHistory, useLocation } from "react-router";
const LoggIn = () => {
  /* this states are used here to store the email, name and password from use */
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  /* this useLocation and useHistory used to redirect user his needed pages */
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.form || "/home";
  /* this state used to confirm user is new or not */
  const [registerd, setRegisterd] = useState(false);
  /* this functions and variables used here to logged in or signed up user correctly as i can, like error message , perfect redirect , user logged in or not, this is aauthContest, this are import from useFirebase utility */
  const {
    signInUsingGoogle,
    createUser,
    loginUser,
    reset,
    setUser,
    setIsLoading,
    setError,
    error,
    updateName,
    verifyEmail,
  } = useAuth();

  /* this function is used to add an user in database  */

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://carnava-server-production.up.railway.app/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  /* this function used to prevent submition loading and user signed up or login using email and password */
  const handleReload = (e) => {
    e.preventDefault();
    /* if registerd user, button will call login function, or will call signup function */
    registerd
      ? loginUser(email, password)
          .then((result) => {
            setUser(result.user);
            setError("");
            history.push(redirect_url);
            setIsLoading(false);
          })
          .catch((err) => {
            setError(err.message);
          })
      : /* here will call signed function */
        createUser(email, password, name)
          .then((result) => {
            saveUser(email, name, "POST");
            setUser(result.user);
            updateName(name);
            setError("");
            verifyEmail();
            history.push(redirect_url);
            setIsLoading(false);
          })
          .catch((err) => {
            setError(err.message);
          });
  };
  /* there will store user inputed name, email, and password*/
  const emailhandle = (e) => {
    setEmail(e.target.value);
  };
  const passwordhandle = (e) => {
    setPassword(e.target.value);
  };
  const namehandle = (e) => {
    setName(e.target.value);
  };
  /* here, this function is confirm that user is now or not, and select which will call signeup function or login using pass and email function */
  const isRegisterd = (e) => {
    setRegisterd(e.target.checked);
  };
  /* this function is used to google sign in */
  const singInUsingGoogleControl = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, "PUT");

        setError("");
        history.push(redirect_url);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="w-25 mx-auto bg-secondary p-2 my-5">
      <h2 className="text-warning text-center bg-dark eounded opacity-75">{registerd ? "Login" : "Signin"} Page</h2>

      <Form onSubmit={handleReload}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {!registerd && (
            <>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onBlur={namehandle}
                type="text"
                aria-required
                placeholder="Enter Name"
              />
            </>
          )}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={emailhandle}
            type="email"
            aria-required
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onBlur={passwordhandle}
            aria-required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className="text-warning"
            onChange={isRegisterd}
            type="checkbox"
            label="Already Registered?"
          />
        </Form.Group>
        <h6 className="text-danger">{error}</h6>
        <Button className="fw-bold" variant="primary" type="submit">
          {registerd ? "Login" : "Signup"}
        </Button>
        <Button
          onClick={() => {
            reset(email);
          }}
          variant="secondery ms-5"
          type="button"
        >
          Forgot password?
        </Button>
        <br />
        <button
          onClick={singInUsingGoogleControl}
          type="button"
          className="mt-4 btn btn-success fw-bold align-items-center text-center"
        >
          <img style={{ width: "30px" }} src={logo} alt="" />
          Google
        </button>
      </Form>
    </div>
  );
};

export default LoggIn;
