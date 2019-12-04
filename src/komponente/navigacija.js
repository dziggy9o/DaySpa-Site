import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//ikone
import DaySpaLogoIkona from '../slike/svg/dayspalogo';
import AsortimanIkona from '../slike/svg/asortiman';
import SaunaIkona from '../slike/svg/sauna';
import SlanaSobaIkona from '../slike/svg/slanasoba';
import ParnoKupatiloIkona from '../slike/svg/parnokupatilo';
import JakuzziIkona from '../slike/svg/jakuzzi';
import MasazaIkona from '../slike/svg/masaza';
import OnamaIkona from '../slike/svg/onama';

const linkovi = [
    {ime: 'Početna', ikona: <DaySpaLogoIkona/>, stranica: '/'},
    {ime: 'Asortiman', ikona: <AsortimanIkona/>, stranica: '/asortiman'},
    {ime: 'Sauna', ikona: <SaunaIkona/>, stranica: '/sauna'},
    {ime: 'Slana soba', ikona: <SlanaSobaIkona/>, stranica: '/slanasoba'},
    {ime: 'Parno kupatilo', ikona: <ParnoKupatiloIkona/>, stranica: '/parnokupatilo'},
    {ime: 'Jakuzzi', ikona: <JakuzziIkona/>, stranica: '/jakuzzi'},
    {ime: 'Masaža', ikona: <MasazaIkona/>, stranica: '/masaza'},
    {ime: 'O nama', ikona: <OnamaIkona/>, stranica: '/onama'},
];
const soclinkovi = [
    {ime: 'dayspastudiobg', ikona: <FontAwesomeIcon icon={['fab', 'facebook']} />, stranica: 'https://www.facebook.com/dayspastudiobg'},
    {ime: 'dayspastudio', ikona: <FontAwesomeIcon icon={['fab', 'instagram']} />, stranica: 'https://www.instagram.com/dayspastudio'}
]
class Navigacija extends Component {
    render() {
        return (
            <nav className="dayspa-meni">
                <ul>
                {linkovi.map((linkovi, i) => {
                    return (
                        <li key={i}>
                            <Link className="" to={linkovi.stranica}>
                            <i className="dsikona dsikona-2x">
                                {linkovi.ikona}
                            </i>
                            <span className="tekst">
                                {linkovi.ime}
                            </span>
                            </Link>
                        </li>
                    )
                })}
                </ul>
                <ul className="social">
                    {soclinkovi.map((soclink, i) => {
                        return (
                            <li key={i}>
                            <a rel="noopener noreferrer" href={soclink.stranica} target="_blank">
                                <i className="dsikona dsikona-2x">{soclink.ikona}</i>
                                <span className="tekst">
                                    {soclink.ime}
                                </span>
                            </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navigacija;