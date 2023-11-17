import { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from "react-lazy-load-image-component";

library.add(faStar);

interface Props {
    currentYear: number;
}

const AppView: FC<Props> = ({ currentYear }) => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Validador de Bootcamps {currentYear}
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ranking">
                                    Ranking de Bootcamps
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/backoffice">
                                    Backoffice
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">
                                    Usuario{" "}
                                    <LazyLoadComponent>
                                        <img
                                            src={`https://picsum.photos/30`}
                                            alt="Perfil"
                                            className="rounded-full"
                                            style={{ borderRadius: "50%" }}
                                        />
                                    </LazyLoadComponent>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Card de Directorio de Bootcamps */}
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Directorio de Bootcamps</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar Bootcamps"
                            />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-secondary">
                                Filtros
                            </button>
                            <button className="btn btn-primary">Agregar</button>
                        </div>

                        {/* Cartas de Bootcamps */}
                        <div className="row mt-4">
                            {[1, 2, 3, 4].map((bootcampId) => (
                                <div key={bootcampId} className="col-md-3 mb-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">
                                                Nombre del Bootcamp
                                            </h5>
                                            <div className="rating">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <FontAwesomeIcon
                                                        key={star}
                                                        icon={faStar}
                                                        className="star"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <textarea
                                                className="form-control"
                                                rows={4}
                                                placeholder="Detalles"
                                            ></textarea>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-info">
                                                Ver más info
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 bg-dark fixed-bottom">
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} Validador Bootcamp</p>
                </div>
            </footer>

            {/* Contenido de la aplicación */}
            {/* ... */}
        </div>
    );
};

export default AppView;
