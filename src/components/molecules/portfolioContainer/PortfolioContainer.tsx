import { Card } from '../../atoms/index'
import { PortfolioContainer } from './PortfolioContainerStyle'

const CardGrid = () => {
  return (
    <PortfolioContainer>
      <div className='card1'>
      <Card height={'70vh'} width={'70vh'} title={'Enlace Urbano'} rol={'Product Owner | Developer'} resume={'Un proyecto de CMS para la ONG chilena, skadjkakjdalk'} />
      </div>
      <div className='card2'>
      <Card height={'32vh'} width={'300px'} title={'La Recette Social'} rol={'lalla'} resume={'hgfhd'}  />
      </div>      
      <div className='card3'>
      <Card height={'32vh'} width={'300px'} title={'Death Code'} rol={'aasa'} resume={''}  />
      </div>
      <div className='card4'>
      <Card height={'32vh'} width={'300px'} title={'Adopt a coder'} rol={'UX/UI designer'} resume={'Proyecto para la Hackaton realizado en dos días'}  />
      </div>
      <div className='card5'>
      <Card height={'32vh'} width={'300px'} title={'Soundwave'} rol={'Developer'} resume={'Primera App en React realizada basándome en un mockup'}  />
      </div>
    </PortfolioContainer>
  )

}

export default CardGrid