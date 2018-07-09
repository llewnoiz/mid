import React, {Component } from 'react';
import PropTypes  from 'prop-types';

/** User */
import config from '../common/config';

/** ref */

/** css */
import menusCss from './menu.css';

class Menu extends Component {
    state = {
        pvr : false
    };

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {pvr : true}
            );
            console.log(`state pvr : ${this.state.pvr}`);
        }, 3000);
        console.log(`state pvr : ${this.state.pvr}`);
    }

    _renderMovies = () => {
        const items = config.menu.map((item, index) => {
          return (
            <MenuItem
                name={item.name}
                img={item.img}
                active={item.active}
                key={index}
            />
          );
        });
        return items;
      };   

    render() {
        return (
            <div className="root__container__backgounrd root__container">
                <div className="menu__container">
                    {this._renderMovies()}
                </div>
            </div>  
        );
    }
}

function MenuItem({name,img, active}) {
    return (
        <div className="menu__item">
            <img className="" src={ window.location.origin  + img}/>
            <label className="">{name}</label>
        </div>   
    );
}

MenuItem.protoTypes = {
    name :  PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
}

export default Menu;