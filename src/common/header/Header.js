import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{padding:0}}>
            {props.children}
        </Typography>
    );
}

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
        <Modal style={customStyles} ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
        <Tabs value={this.state.value} onChange={this.onChangeHandler}>
            <Tab label="LOGIN"></Tab>
            <Tab label="REGISTER"></Tab>
        </Tabs>
        <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="username"> Username </InputLabel>
                        <Input id="username" type="text"/>
                    </FormControl>
                    <FormControl required>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input id="password" type="password"/>
                    </FormControl>
        </TabContainer>
        </Modal>
        </div>

        );
    }
}

export default Header;