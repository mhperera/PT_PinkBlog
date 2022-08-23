import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>

                {/* =============== INLINE CSS ===============  */}
                {/* <a href="/create" style={{
                    color:"white",
                    backgroundColor:"{}",
                    borderRadius: "8px",
                    padding: "8px 15px"
                }}>New Blog</a> */}

            </div>
        </nav>

    );
}
 
export default Navbar;