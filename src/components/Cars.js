import React from 'react';
import './Cars.css'

const Car = ({name, color, year}) => {

    const colorInfo = color ? (`Couleur: ${color}`) : ('Couleur: Aucun');
    if (name) {
        return (
            <tr>
                <td>Marque: {name}</td>
                <td>Age: {year}</td>
                <td>{colorInfo}</td>
            </tr>
        )
    }
    else {
        return null;
    }



}

export default Car;