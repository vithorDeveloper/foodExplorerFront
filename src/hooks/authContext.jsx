import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function singIn({email, password}){

      try{
        const response = await api.post("/sessions", {email, password});
        const {user, token} = response.data

        api.defaults.headers.authorization = `Bearer ${token}`
        setData({user, token})

        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
        localStorage.setItem("@foodexplorer:token", token);

      }
      catch(error){
        if(error.response){
          return alert(error.response.data.message)
        }
        else{
          return alert("não foi possivel entrar")
        }
      }
    }

    async function signOut () {
      localStorage.removeItem("@foodexplorer:user");
      localStorage.removeItem("@foodexplorer:token");
  
      setData({});
    }

    useEffect(() => {
      const token = localStorage.getItem("@foodexplorer:token");
      const user = localStorage.getItem("@foodexplorer:user");

      if(token && user) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setData({
          token,
          user: JSON.parse(user),
        });
      }
    }, []);

    return(
      <AuthContext.Provider value={{ singIn, signOut, user: data.user }}>
        {children}
      </AuthContext.Provider>
    )
  }

    function useAuth(){
      const context = useContext(AuthContext)

      return context
    }


export {
  AuthProvider, 
  useAuth
}