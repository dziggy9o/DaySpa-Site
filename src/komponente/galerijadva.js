import React, {Component} from 'react';

class Galerijadva extends Component {
    constructor(){
        super();
        this.state = {
            isHovered: null
        };
    }
    handleHover(isHovered){
        this.setState({ isHovered })
    }
    
    render(){
        const array = ["Hello", "Hi", "How's it going", "Good Times"]

        
        return (
            <div>
        {array.map((obj, index) => {
          const faded = this.state.isHovered !== index
          return <Child 
            text={obj} 
            fadeAway={faded}
            key={index} 
            onMouseEnter={() => this.handleHover(index)} 
            onMouseLeave={() => this.handleHover(index)}/>
        })}
      </div> 
        
            
        )
    }
}
export default Galerijadva;

class Child extends Component {
    render () {
      return (
        <h2
            onMouseEnter={this.props.onMouseEnter}
          className={this.props.fadeAway ? 'fade-away' : ''}>
          {this.props.text}
        </h2>  
      ) 
    }
  }
