import React, {Component} from 'react';


const menu = {
    position: 'absolute',
    top: '10px',
    right: '100px',

}


class Header extends Component {
    render() {
        return (
            <ul style={menu}>
                <li><a href="#/">Заметки</a></li>
                <li><a href="#/">Пользователи</a></li>
                <li><a href="#/">Проекты</a></li>
            </ul>
        );
    }
}

export default Header;