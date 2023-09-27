import talentText from '../assets/imgs/Talent-text.png'
import rectangle from '../assets/imgs/Rectangle.png'
import patternHome from '../assets/imgs/bg-pattern-home-2.svg'

export function FindTalent() {
  return (
    <section className='find-talent'>
      <div className='talent-container'>
        <div className='talent-title'>
          Find the <br></br>
          best <span className='talent'>talent</span>
        </div>
        <div className='talent-images'>
          <div className='talent-text'>
            <img className='rectangle' src={rectangle} />
          </div>
          <div className='talent-text'>
            <img className='talent-text' src={talentText} />
          </div>
        </div>
      </div>
      <img className='pattern-home' src={patternHome} />
    </section>
  )
}
