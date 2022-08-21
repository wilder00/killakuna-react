

const httpClient = ({axios})=>{

  return {
    get: async (path, config)=>{
      if(!axios)
        return {path, config}
      return await axios.get()
    }
  }
}

export default httpClient