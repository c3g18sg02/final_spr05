import React from "react";
import Navbar from '../components/Navbar'
import './PerfilesCrear.css'
import APIInvoke from "../utils/APIInvoke";

class PerfilesCrear extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            nombre:''
        }
    }

    componentDidMount() {
        document.getElementById("nombre").focus()
    }

    handleChange(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    async add() {
        const data = {
            nombre: this.state.nombre
        }

        const response = await APIInvoke.invokePOST(`/perfiles`, data)

        if (response.id !== 0) {
            this.props.history.push(`/perfiles`)
        } else {
            console.log(response.message)
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="frm">
                    <div className="container">
                        <div id="frm-row" className="row justify-content-center align-items-center">
                            <div id="frm-column" className="col-md-6">
                                <div id="frm-box" className="col-md-12">
                                    <div id="frm-form" className="form">
                                        <h3 className="text-center text-dark">Crear Perfil</h3>
                                        <div className="form-group">
                                            <label htmlFor="nombre" className="text-dark">Nombre: </label><br />
                                            <input type="text" name="nombre" id="nombre" className="form-control"
                                                value={this.state.nombre}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <br />
                                            <button onClick={this.add.bind(this)} className="btn btn-info btn-md">
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
export default PerfilesCrear
