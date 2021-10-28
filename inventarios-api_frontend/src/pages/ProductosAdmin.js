import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke'
import { Link } from 'react-router-dom'

class ProductosAdmin extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            productos: []
        }
    }

    async componentDidMount() {
        const response = await APIInvoke.invokeGET("/productos")
        this.setState({
            productos: response
        })
    }

    async remove(e, producto) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/productos/${producto.id}`)
    }

    async componentDidUpdate() {
        const response = await APIInvoke.invokeGET("/productos")
        this.setState({
            productos: response
        })
    }

    render() {

        const arregloProductos = this.state.productos

        return (
            <div>
                <Navbar />
                <div className="main container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/productos-crear" className="btn btn-primary">
                                Crear
                            </Link>
                            <br/><br/>
                            {
                                arregloProductos.length === 0 ? <div className="alert alert-warning">No existen Registros de productos.</div> :

                                    <table className="table table-dark text-left">
                                        <thead>
                                            <tr>
                                                <th scope="col">Codigo</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Categoria</th>
                                                <th scope="col">Marca</th>
                                                <th scope="col">Id Fabr</th>
                                                <th scope="col">Costo</th>
                                                <th scope="col">Precio Venta</th>
                                                <th scope="col">Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloProductos.map(
                                                    producto =>
                                                        <tr key={producto.id}>
                                                            <td>{producto.id}</td>
                                                            <td>{producto.nombre}</td>
                                                            <td>{producto.categoria}</td>
                                                            <td>{producto.marca}</td>
                                                            <td>{producto.codigo_fabricante}</td>
                                                            <td>{producto.costo}</td>
                                                            <td>{producto.precio_venta}</td>
                                                            <td>
                                                                <Link to={`/productos-editar/${producto.id}`} className="btn btn-info btn-sm" title="Editar">
                                                                    <i className="fas fa-edit"></i>
                                                                </Link>
                                                                &nbsp;&nbsp;
                                                                <button onClick={(e) => this.remove(e, producto)} className="btn btn-danger btn-sm" title="Eliminar">
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
export default ProductosAdmin