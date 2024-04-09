import { Image } from 'antd'
import { IMG_TRAIL } from '../../../constants'

import { Container, Card, CardRight, CardLeft } from './styled'


export const CardTrilha = () => {

  const imgTrail = "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


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
          <h3>Trilha da Costa da Lagoa - Florianópolis / SC</h3>
        </CardRight>
      </Card>
    </Container>
  )
}