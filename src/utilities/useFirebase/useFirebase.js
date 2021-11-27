import initializationApp from "../firebaseConfig/firebase.initialize";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializationApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user.email);
        setError("");
      } else {
        setUser({});
        setError("");
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`https://nameless-badlands-69800.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);

  /* i use auth dependency for removing warning in the console, i have 0 idea on this dependency  */
  /* logout option */
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setError("");
      setIsLoading(false);
    });
  };
  /* create user part  */
  const createUser = (email, password, name) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* login user process using mail and password */
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* used to verfy mail  */
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  /* reset password process */
  const reset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError("check mail");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  /* update name process  */
  const updateName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((err) => {
        setError(err.message);
      });
  };
  /* returning functions and state or variable to use in the login page  */
  return {
    user,
    signInUsingGoogle,
    logOut,
    createUser,
    loginUser,
    reset,
    setIsLoading,
    setUser,
    isLoading,
    setError,
    error,
    updateName,
    verifyEmail,
    admin,
  };
};
export default useFirebase;
