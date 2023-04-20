import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAsyncAction } from "../store/actions/movieActions";

const index = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movieReducer);

    useEffect(() => {
        dispatch(getMoviesAsyncAction());
    }, []);

    return (
        <div className="container mt-5 p-5 bg-light">
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
