import React, {Component} from 'react';

class Galerija extends Component {
    constructor(){
        super();
        this.state = {
            isHoveredA: false,
            isHoveredB: false,
            isHoveredC: false,
            isHoveredD: false,
            isHoveredE: false,
            notHoveredA: false,
            notHoveredB: false,
            notHoveredC: false,
            notHoveredD: false,
            notHoveredE: false
        };
        this.handleHoverA = this.handleHoverA.bind(this);
        this.handleHoverB = this.handleHoverB.bind(this);
        this.handleHoverC = this.handleHoverC.bind(this);
        this.handleHoverD = this.handleHoverD.bind(this);
        this.handleHoverE = this.handleHoverE.bind(this);
    }
    handleHoverA(){
        this.setState(prevState => ({
            isHoveredA: !prevState.isHoveredA,
            notHoveredB: !prevState.notHoveredB,
            notHoveredC: !prevState.notHoveredC,
            notHoveredD: !prevState.notHoveredD,
            notHoveredE: !prevState.notHoveredE,
        }));
    }
    handleHoverB(){
        this.setState(prevState => ({
            isHoveredB: !prevState.isHoveredB,
            notHoveredA: !prevState.notHoveredA,
            notHoveredC: !prevState.notHoveredC,
            notHoveredD: !prevState.notHoveredD,
            notHoveredE: !prevState.notHoveredE,
        }));
    }
    handleHoverC(){
        this.setState(prevState => ({
            isHoveredC: !prevState.isHoveredC,
            notHoveredA: !prevState.notHoveredA,
            notHoveredB: !prevState.notHoveredB,
            notHoveredD: !prevState.notHoveredD,
            notHoveredE: !prevState.notHoveredE,
        }));
    }
    handleHoverD(){
        this.setState(prevState => ({
            isHoveredD: !prevState.isHoveredD,
            notHoveredA: !prevState.notHoveredA,
            notHoveredC: !prevState.notHoveredC,
            notHoveredB: !prevState.notHoveredB,
            notHoveredE: !prevState.notHoveredE,
        }));
    }
    handleHoverE(){
        this.setState(prevState => ({
            isHoveredE: !prevState.isHoveredE,
            notHoveredA: !prevState.notHoveredA,
            notHoveredC: !prevState.notHoveredC,
            notHoveredD: !prevState.notHoveredD,
            notHoveredB: !prevState.notHoveredB,
        }));
    }
    render(){
        const currA = this.state.isHoveredA ? "current" : "";
        const currB = this.state.isHoveredB ? "current" : "";
        const currC = this.state.isHoveredC ? "current" : "";
        const currD = this.state.isHoveredD ? "current" : "";
        const currE = this.state.isHoveredE ? "current" : "";

        const ntcurrA = this.state.notHoveredA ? "notCurrent" : "";
        const ntcurrB = this.state.notHoveredB ? "notCurrent" : "";
        const ntcurrC = this.state.notHoveredC ? "notCurrent" : "";
        const ntcurrD = this.state.notHoveredD ? "notCurrent" : "";
        const ntcurrE = this.state.notHoveredE ? "notCurrent" : "";

        
        return (
            <div>
                <div className="gallery">
                    <div className={`imgWrap imgWrap1 ${ntcurrA} ${currA}`} onMouseEnter={this.handleHoverA} onMouseLeave={this.handleHoverA}></div>
                    <div className={`imgWrap imgWrap2 ${ntcurrB} ${currB}`} onMouseEnter={this.handleHoverB} onMouseLeave={this.handleHoverB}></div>
                    <div className={`imgWrap imgWrap3 ${ntcurrC} ${currC}`} onMouseEnter={this.handleHoverC} onMouseLeave={this.handleHoverC}></div>
                    <div className={`imgWrap imgWrap4 ${ntcurrD} ${currD}`} onMouseEnter={this.handleHoverD} onMouseLeave={this.handleHoverD}></div>
                    <div className={`imgWrap imgWrap5 ${ntcurrE} ${currE}`} onMouseEnter={this.handleHoverE} onMouseLeave={this.handleHoverE}></div>
                </div>
            </div>
        
            
        )
    }
}
export default Galerija;