describe('Component title', () => {
  
  test('Esta prueba no debe fallar', ()=>{
    // 1. inicialización
    const message = "Mensaje inicializado"
  
    //  2. Estímulo
    const message2 = message.trim()
  
    // 3. observar el comportamiento
    expect( message ).toBe(message2)
  
  })
});

