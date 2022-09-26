import { httpClient } from "./http.service"

const httpI = httpClient()
const authService = (http = httpI)=>{
  return {
    login: async({username, password})=>{
      return await http.post('/auth/login',{username, password})
    }
  }
}

export default authService