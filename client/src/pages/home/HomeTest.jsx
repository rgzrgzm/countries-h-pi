import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountry,
  getCountries,
  filterCountryByContinent,
  orderByCountry,
  filterCountryByPopulation,
  getTourActivity,
  countryByActivity,
  sortByAsc,
} from "../../redux/actions";
// import "./Home.scss";
import Card from "../../components/card/Card";
import Pages from "../../components/Pages/Pages";
import SearchBar from "../../components/SearchBar/SearchBar";
// import { NavLink } from "react-router-dom";

export default function HomeTest() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.country);
//   const actTour = useSelector((state) => state.tourActivity);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryByPage, setCountryByPage] = useState(10);
  
  const [inOrder, setInOrder] = useState("");

  const indexOfLastCountry = currentPage * countryByPage;
  const indexOfFirstCountry = indexOfLastCountry - countryByPage;
  const currentCountry = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );


  const showPages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountry());
    // dispatch(getTourActivity());
    dispatch(getCountries())
  }, [dispatch]);



  function handleSort(ev) {
    // ev.preventDefault();
    dispatch(sortByAsc(ev.target.value));
    setInOrder(`Ordenado ${ev.target.value}`);
    setCurrentPage(1);
  }


  return (
    <div className="home">
      <SearchBar setCurrentPage={setCurrentPage} />

      <div>
        <div className="filtros">
          <div>
            <h3 className="findBy">Busqueda por:</h3>
          </div>
          <div className="filtro">
            <select onChange={(ev) => handleSort(ev)} className="selHome">
              <option>Alfabeticamente</option>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
          </div>
          {/* <div className="filtro">
            <select
              onChange={(ev) => handleFilterContinent(ev)}
              className="selHome"
            >
              <option>Continente</option>
              <option value="Africa">África</option>
              <option value="Americas">América</option>
              <option value="Antarctic">Antártica</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europa</option>
              <option value="Oceania">Oceanía</option>
            </select>
          </div> */}
          <div className="filtro">
            {/* <select
              onChange={(ev) => handleSortPopulation(ev)}
              className="selHome"
            >
              <option>Población</option>
              <option value="less">Menor población</option>
              <option value="high">Mayor población</option>
            </select> */}
          </div>
          <div className="filtro">
            {/* <select
              onChange={(ev) => handleCountryActivity(ev)}
              className="selHome"
            >
              <option value={"All"}>Actividad</option>
              if(newActTour.length === 0)
              {
                <NavLink to="/TourActivity" className="actForm">
                  <p className="crearActividad">No Hay actividades. ¿Crear?</p>
                </NavLink>
              }
              {newActTour &&
                newActTour.map((act) => (
                  <option key={act} value={act}>
                    {act}
                  </option>
                ))}
            </select> */}
          </div>
          <div>
            {/* <button
              onClick={(ev) => {
                handleClick(ev);
              }}
              className="bfiltro"
            >
              Limpiar filtro
            </button> */}
          </div>
        </div>

        <div className="cards">
          {currentCountry?.map((co) => {
            return <Card country={co} key={co.id} />;
          })}
        </div>

        <Pages
          countryByPage={countryByPage}
          allCountries={allCountries.length}
          showPages={showPages}
        />
      </div>
    </div>
  );
}
