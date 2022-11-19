import CounterComponent from "./CounterComponent";
function Reset(props) {
    const style ={
        buttonStyle: {fontSize: '1.2em', padding: '5px', borderRadius: '10px', margin: '5px'}
     }
     if(props.count==10){
        return(
            <button style={style.buttonStyle} onClick={props.reset}>
            Reset
          </button>
         )
     }
     
 
}
export default Reset;
