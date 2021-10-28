import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke'
import { Link } from 'react-router-dom'

class PerfilesAdmin extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            perfiles: []
        }
    }

    async componentDidMount() {
        const response = await APIInvoke.invokeGET("/perfiles")
        this.setState({
            perfiles: response
        })
    }

    async remove(e, perfil) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/perfiles/${perfil.id}`)
    }

    async componentDidUpdate() {
        const response = await APIInvoke.invokeGET("/perfiles")
        this.setState({
            perfiles: response
        })
    }

    render() {

        const arregloPerfiles = this.state.perfiles

        return (
            <div>
                <Navbar />
                <div className="main container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/perfiles-crear" className="btn btn-primary">
                                Crear
                            </Link>
                            <br/><br/>
                            {
                                arregloPerfiles.length === 0 ? <div className="alert alert-warning">No existen Registros de perfiles.</div> :

                                    <table className="table table-dark text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Perfil</th>
                                                <th scope="col">Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloPerfiles.map(
                                                    perfil =>
                                                        <tr key={perfil.id}>
                                                            <td>{perfil.id}</td>
                                                            <td>{perfil.nombre}</td>
                                                            <td>
                                                                <Link to={`/perfiles-editar/${perfil.id}`} className="btn btn-info btn-sm" title="Editar">
                                                                    <i className="fas fa-edit"></i>
                                                                </Link>
                                                                &nbsp;&nbsp;
                                                                <button onClick={(e) => this.remove(e, perfil)} className="btn btn-danger btn-sm" title="Eliminar">
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PerfilesAdmin