import React, { useState, useEffect } from 'react';
import CarComponent from '../cars/CarComponent';
import servicesCar from '../../services/carServices';




const ListCarComponent = (props) => {
    const [cars, setCars] = useState(null);


    useEffect(() => {
        servicesCar.getCars().then(x => setCars(x.data));
    }, []);

    return (
        <div class="mt-4 row">
            {cars && cars.map(car => 
                <CarComponent data={car}></CarComponent>
            )}

     </div>   
    )

}


export default ListCarComponent