import {Component} from 'react'
import './Dice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
class Dice extends Component{
render(){
    const {face, rolling} = this.props
      
    // Using font awesome icon to show
    // the exactnumber of dots
    return (
            <div>
                <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die ${rolling && 'Die-shaking'}`} />
            </div >
        )
}
}
  
export default Dice