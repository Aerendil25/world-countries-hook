const Card = ({ country }) => {
  return (
    <>
      <div className="col col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card">
          <img src={country.flags.png} alt="" />
          <h5>{country.name.common}</h5>
          <hr />
          <h6>Capital: {country.capital}</h6>
          <h6>Population: {country.population}</h6>
        </div>
      </div>
    </>
  );
};

export default Card;
