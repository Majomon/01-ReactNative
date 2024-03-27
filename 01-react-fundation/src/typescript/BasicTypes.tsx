export const BasicTypes = () => {
  const name: string = "Mauricio";
  const age: number = 33;
  const isActive: boolean = true;
  const powers: string[] = ["React", "React Native", "Angular", "Vue"];

  powers.push("Next Js")
  return (
    <>
      <h3>Tipos básicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
    </>
  );
};
