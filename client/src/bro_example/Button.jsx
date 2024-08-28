
function Button() {

    // let count = 0;

    const handleClick = (e) =>  {

        e.target.textContent = "wow";
        // if(count < 3){
        //     count++;
        //     console.log(`${name} you clicked me ${count} time/s`)
        // } else {
        //     console.log(`${name}, STOP!!`)
        // }
    }


    return(
        <button onDoubleClick={(e)=> handleClick(e)}>Click</button>
    );
}

export default Button