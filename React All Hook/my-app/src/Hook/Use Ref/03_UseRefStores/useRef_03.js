function App() {

  console.log("Rendering App...");
  const click_ref = React.useRef(null);
  
  React.useEffect(()=>{
    function handleClick() {
      console.log("Running handleClick defined inside useEffect()...");
    }
    console.log("Updating click_ref...");
    click_ref.current = handleClick;
  },[]);

  return(
    <React.Fragment>
      <div>App</div>
      <button onClick={()=>click_ref.current()}>Click</button>
    </React.Fragment>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.3/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.3/umd/react-dom.production.min.js"></script>
<div id="root"/> */}