interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean; // optional property
}

interface Address {
  country: string;
  houseNro: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    firstName: "Mauricio",
    lastName: "Monzón",
    age: 33,
    isAlive: true,
    address: {
      country: "Argentina",
      houseNro: 5854,
    },
  };

  return (
    <>
      <h3>Objectos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
