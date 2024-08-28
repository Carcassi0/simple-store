import React, {useState} from "react";

function MyComponent2() {
    const[car, setCar] = useState({year: 2024,
                                   maker: "Mercedes",
                                   model: "Sclass"});

    function handleYearChange(e) {
        setCar(c=>({...c, year: e.target.value}));
        
    }
    function handleMakerChange(e) {
        setCar(c=>({...c, maker: e.target.value}));
    }
    function handleModelChange(e) {
        setCar(c=>({...c, model: e.target.value}));
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.maker} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}></input>
            <input type="text" value={car.maker} onChange={handleMakerChange}></input>
            <input type="text" value={car.model} onChange={handleModelChange}></input>
        </div>
    )

}

export default MyComponent2