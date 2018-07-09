import React, {Component } from 'react';
import PropTypes  from 'prop-types';

/** User */
import config from 'common/config';

/** ref */

/** css */
import font from 'common/fonts/font.css';
import menusCss from './menu.css';

class Menu extends Component {
    state = {
        pvr : false
    };

    componentWillMount() {
        console.log('componentWillMount');
        const getPvrSatus = '';
        fetch(`${getPvrSatus}`)
        .then( data => data.json())
        .then( json => this._getPvrStatus(json))
        .catch( e => { console.log(`e error : ${e}`) });
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState(
                {pvr : true}
            );
            console.log(`state pvr : ${this.state.pvr}`)
        }, 3000);
        console.log(`state pvr : ${this.state.pvr}`);
    }

    _getPvrStatus = (json) => {
        if(json.result === 'ok') {
            console.log('you can use pvr');
        } else {
            console.log('pvr is not supported / you can not enable pvr');
        }
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
            <img src={img} className="menu__item__img active" />
            <label className="menu__item__text">{name}</label>
        </div>   
    );
}

MenuItem.protoTypes = {
    name :  PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
}

export default Menu;