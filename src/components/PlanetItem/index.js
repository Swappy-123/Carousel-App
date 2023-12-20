// Write your code here
import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails
  return (
    <li className="item-bg">
      <h1 className="item-head">{name}</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="item-img" />
      <p className="item-para">{description}</p>
    </li>
  )
}

export default PlanetItem
