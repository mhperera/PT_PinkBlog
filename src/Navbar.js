const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" >New Blog</a>

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