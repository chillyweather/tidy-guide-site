import PropTypes from "prop-types";

import { useEffect, useState } from "preact/hooks";

export const VideoDocSection = ({ element, index }) => {
  const [currentMovieLink, setCurrentMovieLink] = useState("");
  const [currentMovieName, setCurrentMovieName] = useState("");
  const [currenMovieIndex, setCurrentMovieIndex] = useState(0);
  const movies = element.content.videoDataElements;

  useEffect(() => {
    if (movies.length > 0) {
      setCurrentMovieLink(movies[0].video);
      setCurrentMovieName(movies[0].name);
    }
  }, []);

  return (
    <div className={"section videoSection"}>
      <div className={"anchorLink"} id={element.title + index}></div>
      {element.title && (
        <div className={"title-row"}>
          <h3 className={"title"}>{element.title}</h3>
          <a href={"#top"} className={"back-link"}>
            ⬆︎
          </a>
        </div>
      )}
      <div className="videoDiv">
        <iframe
          width="560"
          height="315"
          src={currentMovieLink}
          title="YouTube video player"
          frameBorder="0px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          autoPlay
          allowFullScreen
        />
        <p>{currentMovieName}</p>
      </div>
      {movies.map((movie, index) => {
        const isCurrent = currenMovieIndex === index;
        return (
          <div key={index}>
            <button
              className={isCurrent ? "videoSelected" : ""}
              onClick={() => {
                setCurrentMovieLink(movie.video + "?autoplay=1&enablejsapi=1");
                setCurrentMovieName(movie.name);
                setCurrentMovieIndex(index);
              }}
            >
              {movie.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

VideoDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
};
