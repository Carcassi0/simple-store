import React, {useState} from "react";

function MyComponent4(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleYearChange(e){
        setCarYear(e.target.value);
    }
    function handleMakeChange(e){
        setCarMake(e.target.value);
    }
    function handleModelChange(e){
        setCarModel(e.target.value);
    }
    function handleAddCar(e){

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c => [...c, newCar ]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }


    return(
        <div>
            <h1>List of Car Object</h1>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => {handleRemoveCar(index)}}>
                    {car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}></input>
            <input type="string" value={carMake} onChange={handleMakeChange}
                placeholder="Enter car maker"></input>
            <input type="string" value={carModel} onChange={handleModelChange}
                placeholder="Enter car model"></input>

            <button onClick={handleAddCar}>Add Car</button>
        </div>
        
    );
}

export default MyComponent4