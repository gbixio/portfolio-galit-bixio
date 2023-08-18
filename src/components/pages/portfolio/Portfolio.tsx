import { Title } from "../../atoms"
import CardGrid from "../../molecules/portfolioContainer/PortfolioContainer"
import { PortfolioStyle } from "./PortfolioStyle"

function Portfolio() {
  return (
    <PortfolioStyle>
      <Title title1={"Descubre"} highligth={" mis proyectos"} hlcolor={""} title2={""}/>
    <CardGrid />
    </PortfolioStyle>
  )
}

export default Portfolio