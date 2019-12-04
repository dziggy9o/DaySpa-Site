import React, {Component} from 'react';

import Navigacija from './komponente/navigacija';
import Galerija from './komponente/galerija';
import {BrowserRouter as Router, route} from 'react-router-dom';


//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)




class DaySpa extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navigacija />
                <Galerija />
                
            </div>
            </Router>
        )
    }
}

export default DaySpa;