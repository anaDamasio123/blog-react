const Home  = () => {
    const handleClick = (e) => {
        console.log('hello, ninjas');
    }

    const handleClickAgain = (e, name) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={ handleClick }n>Click me</button>
            <button onClick={(e) => {
                handleClickAgain(e, 'mario') 
                }}n>Click me again
            </button>
        </div>
     );
}
 
export default Home;