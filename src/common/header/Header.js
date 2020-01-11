import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
class Header extends Component {
    render() {
        return(
            // <div className="header-container">
            //     <Button id="loginBtn" variant="contained" color="default">Login</Button>
            // </div>
        <header className="header-container">
            <img className="app-logo" src={logo} alt="logo"/>
            <div className="login-button">
                <Button variant="contained" color="default">
                    Login
                </Button>
            </div>
        </header>
        );
    }
}

export default Header;