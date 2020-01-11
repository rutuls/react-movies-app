import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {

    constructor () {
        super();
        this.state = {
            isModalOpen: false,
            value: 0
        };
    }

    openModalHandler = () => {
        this.setState({isModalOpen: true});
    }

    closeModalHandler = () => {
        this.setState({isModalOpen: false});
    }

    onChangeHandler = (event, val) => {
        this.setState({value: val});
    }

    render() {
        return(
        <div>
        <header className="header-container">
            <img className="app-logo" src={logo} alt="logo"/>
            <div className="login-button">
                <Button variant="contained" color="default" onClick={this.openModalHandler}>
                    Login
                </Button>
            </div>
        </header>
        <Modal ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
        <Tabs value={this.state.value} onChange={this.onChangeHandler}>
            <Tab label="LOGIN"></Tab>
            <Tab label="REGISTER"></Tab>
        </Tabs>
        </Modal>
        </div>

        );
    }
}

export default Header;