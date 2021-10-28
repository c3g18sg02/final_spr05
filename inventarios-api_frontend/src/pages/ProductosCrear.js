import React from "react";
import Navbar from '../components/Navbar'
import './ProductosCrear.css'
import APIInvoke from "../utils/APIInvoke";

class ProductosCrear extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            id: '',
            categoria: '',
            marca: '',
            nombre: '',
            codigo_fabricante: '',
            costo: '',
            precio_venta: '',
           
        }
    }

    componentDidMount() {
        document.getElementById("id").focus()
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    }
        
    async add() {
        const data = {
            id: this.state.id,
            categoria: this.state.categoria,
            marca: this.state.marca,
            nombre: this.state.nombre,
            codigo_fabricante: this.state.codigo_fabricante,
            costo: this.state.costo,
            precio_venta: this.state.precio_venta
        }

        const response = await APIInvoke.invokePOST(`/productos`, data)

        if (response.id !== 0) {
            this.props.history.push(`/productos`)
        } else {
            console.log(response.message)
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div id="frm">
                    <div className="container-fluid">
                        <div id="frm-row" className="row justify-content-center align-items-center">
                            <div id="frm-column" className="col-md-6">
                                <div id="frm-box" className="col-md-12">
                                    <div id="frm-form" className="form">
                                        <h3 className="text-center text-dark">Crear Producto</h3>
                                        <div className="form-group">
                                            <label htmlFor="id" className="text-dark">Codigo Barras: </label>
                                            <input type="number" name="id" id="id" className="form-control"
                                                value={this.state.id}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="nombre" className="text-dark">Nombre: </label>
                                            <input type="text" name="nombre" id="nombre" className="form-control"
                                                value={this.state.nombre}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>                                        
                                        <div className="form-group">
                                            <label htmlFor="categoria" className="text-dark">Categoria: </label>
                                            <input type="text" name="categoria" id="categoria" className="form-control"
                                                value={this.state.categoria}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="marca" className="text-dark">Marca del producto: </label>
                                            <input type="text" name="marca" id="marca" className="form-control"
                                                value={this.state.marca}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="codigo_fabricante" className="text-dark">Codigo Fabricante: </label>
                                            <input type="text" name="codigo_fabricante" id="codigo_fabricante" className="form-control"
                                                value={this.state.codigo_fabricante}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="precio_venta" className="text-dark">Precio de Venta: </label>
                                            <input type="number" name="precio_venta" id="precio_venta" className="form-control"
                                                value={this.state.precio_venta}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <br />
                                            <button onClick={this.add.bind(this)} className="btn btn-primary btn-md">
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductosCrear
