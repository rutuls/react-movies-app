import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import './Details.css'
import { Typography } from '@material-ui/core';
import ReactDOM from 'react-dom';
import Home from '../home/Home';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId;
        })[0];
        this.setState({ currentState });
    }

    backtohomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById("root"));
    }

    render() {
        let movie = this.state.movie;
        return (
            <div className="details">
                <Header />
                <div className="back">
                    <Typography onClick={this.backtohomeHandler}>
                        &#60; Back To Home
                    </Typography>
                </div><br/>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url}></img>
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Genre: </span><span>{movie.genres.join(",")}</span></Typography><br/><br/>
                            <Typography><span className="bold"> Duration: </span><span>{movie.duration}</span></Typography>
                            <Typography><span className="bold"> Release Date: </span><span>{new Date(movie.release_date).toDateString()}}</span></Typography>
                            <Typography><span className="bold"> Rating: </span><span>{movie.critics_rating}</span></Typography><br/>
                            <Typography><span className="bold"> Plot: <a href={movie.wiki_url}> Wiki Link </a></span><span>{movie.storyline}</span></Typography>
                        </div>
                    </div>
                    <div className="rightDetails"></div>
                </div>
            </div>
        );
    }
}

export default Details;