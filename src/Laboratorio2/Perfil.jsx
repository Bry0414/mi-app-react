function Perfil() {
  const nombre = "Bryan";
  const profesion = "Desarrollador Web";
  const experiencia = 3;
  const disponible = true;

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p>{disponible ? "Disponible para contratar" : "No disponible"}</p>
    </div>
  );
}

export default Perfil;
