import buildTitle from '../assets/imgs/Build-text.png'
import orangeRectangle from '../assets/imgs/orange-Rectangle.svg'
import iconCog from '../assets/imgs/build-cog.png'
import iconChart from '../assets/imgs/build-chart.png'
import iconPerson from '../assets/imgs/build-person.png'

export function Build() {
  return (
    <div className='build-container'>
      <img className='orange-rectangle' src={orangeRectangle} />
      <div className='build-title'>
        <img src={buildTitle} />
      </div>
      <div className='build-icons'>
        <img src={iconPerson} />
        <img src={iconCog} />
        <img src={iconChart} />
      </div>
    </div>
  )
}
