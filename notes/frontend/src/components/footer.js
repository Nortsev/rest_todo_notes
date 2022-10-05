import React, {Component} from 'react';


const footer = {
    padding: '10px 20px',
    background: 'red',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '80px',
}


class Footer extends Component {

    render() {
        return (
            <footer style={footer}>
                <p>Учебный проект на React.</p>
            </footer>
        )
    }
}

export default Footer;