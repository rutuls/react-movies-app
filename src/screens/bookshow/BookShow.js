import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from '../home/Home';
import { Typography, MenuItem } from '@material-ui/core';
import '../bookshow/BookShow.css';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';


class BookShow extends Component {

    constructor () {
        super();
        this.state = {
            location:"",
            language:"",
            showdate:"",
            showtime:""
        }
    }

    backtohomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById("root"));
    }

    locationChangeHandler = event => {
        this.setState({location: event.target.value});
    }

    languageChangeHandler = event => {
        this.setState({language: event.target.value});
    }

    showDateChangeHandler = event => {
        this.setState({showdate: event.target.value});
    }

    showTimeChangeHandler = event => {
        this.setState({showtime: event.target.value});
    }


    render() {
        return (
            <div>
                <Header/>
                <div className="bookShow">
                    <Typography className="back" onClick={this.backtohomeHandler}>
                        &#60; Back To Home
                    </Typography>
                </div>

                <Card className="cardStyle">
                    <CardContent>
                    <Typography variant="headline" component="h2">
                        BOOK SHOW
                    </Typography><br/>
                    <FormControl className="formControl">
                        <InputLabel htmlFor="location"> Choose Location: </InputLabel>
                        <Select value={this.state.location} onChange={this.locationChangeHandler}>
                            {
                                location.map( loc => (
                                    <MenuItem key={"loc"+loc.id} value={loc.location}>
                                        {loc.location}
                                    </MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl><br/><br/>

                    <FormControl className="formControl">
                        <InputLabel htmlFor="language"> Choose Language: </InputLabel>
                        <Select value={this.state.language} onChange={this.languageChangeHandler}>
                            {
                                language.map( lang => (
                                    <MenuItem key={"lang"+lang.id} value={lang.language}>
                                        {lang.language}
                                    </MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl><br/><br/>

                    <FormControl className="formControl">
                        <InputLabel htmlFor="showdate"> Choose Show Date: </InputLabel>
                        <Select value={this.state.showdate} onChange={this.showDateChangeHandler}>
                            {
                                showDate.map( shdt => (
                                    <MenuItem key={"sd"+shdt.id} value={shdt.showDate}>
                                        {shdt.showDate}
                                    </MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl><br/><br/>

                    <FormControl className="formControl">
                        <InputLabel htmlFor="showtime"> Choose Show Time: </InputLabel>
                        <Select value={this.state.showtime} onChange={this.showTimeChangeHandler}>
                            {
                                showTime.map( shtime => (
                                    <MenuItem key={"shtime"+shtime.id} value={shtime.showTime}>
                                        {shtime.showTime}
                                    </MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl><br/><br/>
                    </CardContent>
                </Card>

            </div>
        )
    }
}

export default BookShow;