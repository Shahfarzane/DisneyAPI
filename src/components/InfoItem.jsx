import "./Info.css";

function InfoItem({ movie }) {
  return (
    <div className="artist">
      <div className="display-name-follow-button">
        <div className="frame-1326">
          <h1 className="title">{movie.name}</h1>
        </div>
        <div className="frame-961">
          <div className="text">
            <div className="year">{movie.year}</div>
            <div className="frame-953"></div>
          </div>
          <div className="text-1">heelllooo</div>
        </div>
      </div>
      <div className="bottom">
        <div className="bio-links">
          <div className="bio">
            <div className="bio-1"></div>
            <p className="we-are-laying-the-gr">MOVIE DESCRIPTION HERE !!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
