export const cargarNotas = () => {
  const notas = localStorage.getItem("notas")
  return notas ? JSON.parse(notas) : []
}

export const guardarNotas = (notas) => {
  localStorage.setItem("notas", JSON.stringify(notas))
}
