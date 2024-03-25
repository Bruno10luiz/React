import { useState } from "react"

export default function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 9000000)
    const games = { id, title, cover }
    setGames(state => [...state, games])
  }

  const removeGame = (id) => {
    setGames(state => state.filter(game => game.id !== id))
  }

  const handleClick = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return (
    <div>
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="title">Título: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label htmlFor="cover">Capa: </label>
        <input
          type="text"
          name="cover"
          id="cover"
          value={cover}
          onChange={(ev) => setCover(ev.target.value)}
        />
        <button type="submit">Adicionar a Biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt={game.title} />
            <div>
              <h3>{game.title}</h3>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}