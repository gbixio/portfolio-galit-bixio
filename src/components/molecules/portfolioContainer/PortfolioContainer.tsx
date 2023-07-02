import { Card } from '../../atoms/index'
import { PortfolioContainer } from './PortfolioContainerStyle'

const CardGrid = () => {
  return (
    <PortfolioContainer>
      <a className='card1' href="https://github.com/Enlace-Urbano">
      <Card height={'70vh'} width={'70vh'} title={'Enlace Urbano'} rol={'Product Owner | Developer | UX/UI '} resume={'¡Construyendo puentes! Elaboramos un CMS responsive con Backend y Frontend que permite a Enlace Urbano ONG gestionar su contenido de manera eficiente. Un proyecto impactante, colaborando con una organización comprometida en mejorar la calidad de vida de comunidades urbanas.'} />
      </a>
      <a className='card2' href='https://github.com/gbixio/front-recette-social-recetasreactivas'>
      <Card height={'32vh'} width={'300px'} title={'La Recette Social'} rol={'Developer'} resume={'¡Una red social gastronómica! Backend y Frontend para esta API Rest que permite crear, compartir y aprender recetas de comida.'}  />
      </a>      
      <a className='card3' href='https://github.com/Death-Code/Death-Code' >
      <Card height={'32vh'} width={'300px'} title={'Death Code'} rol={'Developer'} resume={'¡Un juego de muerte! En esta ruleta rusa virtual escribes el nombre de los participantes y uno morirá al azar'}  />
      </a>
      <a className='card4' href="https://github.com/adoptacoder-app/adoptacoder" >
      <Card height={'32vh'} width={'300px'} title={'Adopt a coder'} rol={'UX/UI | Developer'} resume={'MVP realizado en 48hs para la Hackaton organizada por La Caixa Tech y Factoría F5 elaborada para que las empresas encuentren a sus coders'}  />
      </a> 
      <a className='card5' href='https://github.com/gbixio/soundwave-react'>
      <Card height={'32vh'} width={'300px'} title={'Soundwave'} rol={'Developer'} resume={'Primera App en React realizada basándome en un mockup'}  />
      </a>
    </PortfolioContainer>
  )

}

export default CardGrid