import React, { Component } from 'react'

class ProductList extends Component {
    // constructor( props ){
    //     super( props )
    // }

    render(){
    return(
        <div class="row">
            <div class="col-md-5 mx-auto mt-4">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Articulo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.props.articulos.map((articulo) =>
                                <tr>
                                    <td>{articulo.nombre}</td>
                                    <td>{articulo.cantidad}</td>
                                    <td>{articulo.precio}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )}
}

export default ProductList;