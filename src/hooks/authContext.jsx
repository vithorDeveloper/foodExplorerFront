import { createContext, useContext, useState } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function singIn({email, password}){

      try{
        const response = await api.post("/sessions", {email, password});
        const {user, token} = response.data

        console.log(response)

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(user, token)

        setData({user, token});
        console.log(user, token)

      }
      catch(error){
        if(error.response){
          alert(error.response.data.message)
        }
        else{
          alert("não foi possivel entrar")
        }
      }
    }

    return(
      <AuthContext.Provider value={{ singIn, user: data.user }}>
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