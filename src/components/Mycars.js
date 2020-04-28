import React, { Component, Fragment } from 'react';
import Car from './Cars';

class Mycars extends Component {

    state = {
        voiture: [
            { name: 'Ford', color: 'red', year: 2000 },
            { name: 'Renault', color: 'black', year: 2010 },
            { name: 'Mercedes', color: 'Green', year: 2018 },
        ],
        titre: 'Mon Catalogue Voitures'
    }

    addTenYears = () => {

        const updateState = this.state.voiture.map((param) => {
            return param.year -= 10;
        })

        this.setState({
            updateState
        })
    }

    render() {

        const year = new Date().getFullYear();

        return (
            <Fragment>

                <h1>{this.state.titre}</h1>

                <button onClick={this.addTenYears}> +10 ans</button>

                <table className="carsTable">
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>

                {
                    this.state.voiture.map((voiture, index)=> {
                        return (
                            <Fragment key={index} >
                                <Car name={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                            </Fragment>
                        )
                    })
                    }
                </table>
            </Fragment>
            )
    }
}

export default Mycars;
