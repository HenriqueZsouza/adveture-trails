import { CardTrilha } from './components/CardTrilha'

export const App = () => {

  const nameTrail = "Trilha da Costa da Lagoa"
  const city = "Florianópolis"
  const state = "SC"
  const duration = "4 horas"
  const path = "4 km"
  const difficulty = "Iniciante"
  const userName = "Henrique"
  const urlImg = "url_da_imagem"

  return (
    <CardTrilha
      nameTrail={nameTrail}
      city={city}
      state={state}
      duration={duration}
      path={path}
      difficulty={difficulty}
      userName={userName}
      urlImg={urlImg}
    />
  )
}