import React, { Component } from 'react'

class ProductListStock extends Component {

    // constructor(props) {
    //     super(props);
    // }

    frutasEnStock = () => this.props.articulos.filter(articulo => articulo.cantidad > 0).map(articulo => <li>{articulo.nombre}</li>)

    frutasSinStock = () => this.props.articulos.filter(articulo => articulo.cantidad === 0)

    render() {
        return (
            <div>
                <h2>
                    Frutas en stock
                </h2>

                <ul>
                    {this.frutasEnStock()}
                </ul>

                <h2>
                    Frutas sin stock
                </h2>

                <ul>
                    {this.frutasSinStock().map(fruta => <li>{fruta.nombre}</li>)}
                </ul>
            
            </div>
        )
    }
}

export default ProductListStock