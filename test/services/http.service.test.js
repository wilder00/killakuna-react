import httpClient from "../../src/services/http.service";


describe('Http client', () => {
  
  test('should return an object using promise', (done) => {

    const data = {
      nombre: "hola"
    }
    const axiosMock = {
      get: ()=> Promise.resolve({ nombre: "hola"})
    }
    const http = httpClient({axios: axiosMock})
    const response = http.get().then((response)=>{
      expect(response).toStrictEqual(data)
      done()
    })

  });

  test('should return an object using async', async() => {

    const data = {
      nombre: "hola"
    }
    const axiosMock = {
      get: ()=> Promise.resolve({ nombre: "hola"})
    }
    const http = httpClient({axios: axiosMock})
    const response = await http.get()
    expect(response).toStrictEqual(data)
  });
});