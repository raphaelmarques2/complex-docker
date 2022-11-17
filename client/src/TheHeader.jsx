import { Link } from "react-router-dom"

function TheHeader(){
    return (
        <header>
        <h1>Hi!!</h1>
        <Link to="/">Home</Link> | 
        <Link to="other">Other Page</Link>
      </header>
    )
}
export default TheHeader