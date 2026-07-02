function ListaHabilidades() {
  const habilidades = ["React", "JavaScript", "CSS", "Node.js", "Git", "TypeScript"];

  return (
    <div>
      <h3>Habilidades técnicas</h3>
      <p>Total: {habilidades.length}</p>
      <ul>
        {habilidades.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaHabilidades;
