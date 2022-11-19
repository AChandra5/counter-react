
function CounterComponent(props){
    
    //styling
    const style ={
       buttonStyle: {fontSize: '1.2em', padding: '5px', borderRadius: '10px', margin: '5px'}
    }


    return(
        <>
            <h1>{props.count}</h1>
            <button style = {style.buttonStyle} onClick={props.increment}>Increment</button>
            <button style = {style.buttonStyle} onClick={props.decrement}>Decrement</button>
           { props.count >= 10 ? <button style = {style.buttonStyle} onClick={props.reset}>Go back to 0</button> : null}

            
            
        </>
    )

}
export  default CounterComponent