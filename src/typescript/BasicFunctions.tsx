export const BasicFunctions = () => {
  /* El último number es lo que retorna, en este caso va a retornar un número */
  const addToNumber = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar :{addToNumber(2, 2)}</span>
    </>
  );
};
