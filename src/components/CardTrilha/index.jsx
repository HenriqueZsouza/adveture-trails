import { Image } from 'antd'
import { IMG_TRAIL } from '../../../constants'
import { Container, Card, CardRight, CardLeft } from './styled'


export const CardTrilha = ({ nameTrail, city, state, duration, path, difficulty, userName, urlImg }) => {


  return (
    <Container>
      <Card>
        <CardLeft>
          <Image
            src={IMG_TRAIL}
            alt="pessoas na trilha"
            width={300}
            height={280}
          />
        </CardLeft>
        <CardRight>
          <h3>{`${nameTrail} - ${city} / ${state}`}</h3>
          <p><strong>Duração:</strong> {duration}</p>
          <p><strong>Trajeto:</strong> {path}</p>
          <p>{difficulty}</p>
          <p><strong>Por:</strong> {userName}</p>
        </CardRight>
      </Card>
    </Container>
  )
}