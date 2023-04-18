import React, { useEffect, useState } from "react";
import { decrement, increment } from "../store/reducers/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const index = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counterReducer);
    const [movies, setMovies] = useState([]);

    const GetLatestMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
        );
        setMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
        GetLatestMovies();
    }, []);

    return (
        <div className="container mt-5 p-5 bg-light">
            <h1 className="index-heading">Lorem ipsum dolor sit amet.</h1>
            <button
                onClick={() => dispatch(increment())}
                className="btn btn-dark px-5"
            >
                +
            </button>
            <span className="fs-1 px-3">{value}</span>
            <button
                onClick={() => dispatch(decrement())}
                className="btn btn-dark px-5"
            >
                -
            </button>
            <br /> <br />
            <img src="/model1.jpg" height={200} alt="" />
            <br /> <br />
            {movies &&
                movies.map((m) => (
                    <img
                        key={m.id}
                        height={200}
                        src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                    />
                ))}
        </div>
    );
};

export default index;
