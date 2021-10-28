import React from "react";
import Navbar from '../components/Navbar'
import APIInvoke from "../utils/APIInvoke";

class PerfilesEditar extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            id: '',
            nombre: ''
        }
    }

    async componentDidMount() {
        const perfilId = this.props.match.params.perfilId
        const response = await APIInvoke.invokeGET(`/perfiles/${perfilId}`)

        this.setState({
            id: response.id,
            nombre: response.nombre
        })
    }

    handleChange(e) {
        this.setState({
            nombre: e.target.value
        })

    }

    async edit() {
        const data = {
            id: this.state.id,
            nombre: this.state.nombre
        }

        const response = await APIInvoke.invokePUT(`/perfiles`, data)
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
                                        <h3 className="text-center text-info">Editar Perfil</h3>
                                        <div className="form-group">
                                            <label htmlFor="nombre" className="text-info">Nombre: </label><br />
                                            <input type="text" name="nombre" id="nombre" className="form-control"
                                                value={this.state.nombre}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <br />
                                            <button onClick={this.edit.bind(this)} className="btn btn-info btn-md">
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
export default PerfilesEditar