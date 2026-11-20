function Universe() {
  const imageStyle = {
    width: "150px",
    height: "70px",
    objectFit: "contain",
  };

  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* First Row */}
      <div className="row mt-5">
        <div className="col-4 text-center">
          <img
            src="/media/images/smallcaseLogo.png"
            style={imageStyle}
            alt="Smallcase"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 text-center">
          <img
            src="/media/images/streakLogo.png"
            style={imageStyle}
            alt="Streak"
          />
          <p className="text-muted">Algo & strategy platform</p>
        </div>

        <div className="col-4 text-center">
          <img
            src="/media/images/sensibullLogo.svg"
            style={imageStyle}
            alt="Sensibull"
          />
          <p className="text-muted">Options trading platform</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-5">
        <div className="col-4 text-center">
          <img
            src="/media/images/zerodhaFundhouse.png"
            style={{width: "170px", height: "70px", objectFit: "contain"}}
            alt="Zerodha Fund House"
          />
          <p className="text-muted">Asset management</p>
        </div>

        <div className="col-4 text-center">
          <img
            src="/media/images/goldenpiLogo.png"
            style={{width: "170px", height: "70px", objectFit: "contain"}}
            alt="GoldenPi"
          />
          <p className="text-muted">Bonds trading platform</p>
        </div>

        <div className="col-4 text-center">
          <img
            src="/media/images/dittoLogo.png"
            style={{ width: "120px", height: "70px", objectFit: "contain" }}
            alt="Ditto"
          />
          <p className="text-muted">Insurance</p>
        </div>
      </div>

      {/* Signup Button */}
      <div className="row mt-5">
        <div className="col">
          <button
            className="btn btn-primary"
            style={{
              width: "20%",
              margin: "0 auto",
              display: "block",
            }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
