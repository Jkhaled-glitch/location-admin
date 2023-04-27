import { useContext, useState,useEffect } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import {
 
  getDocs,
  doc,
  getDoc,

} from "firebase/firestore";

import { db } from "../../firebase";

const Login = () => {
  

    const fetchUserData = async (email) => {
      const docRef = doc(db, "ADMIN", email);
      const docSnap = await getDoc(docRef);
    
      if (!docSnap.exists()) {
        throw new Error("User not exist");
      }
    
      return docSnap.data();
    };
    
  


  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      
      const docSnap = await getDoc(doc(db, "ADMIN", email));
      if (!docSnap.exists()) {
        throw new Error("Wrong: Admin does not exist");
      }
  
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((err) => {
        throw new Error("Wrong: email or password");
      });

    } catch (err) {
      setError(err.message); // utilisez "err.message" pour afficher le message d'erreur au lieu de tout l'objet d'erreur
    }
  };
  
  

  return (
    <div className="login">
      
      <form onSubmit={handleLogin}>
      <div>SIGN IN</div>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {setEmail(e.target.value)
                            setError(false)     }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>{ setPassword(e.target.value)
                            setError(false)           }}
        />
        <button type="submit">LOG IN</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default Login;
