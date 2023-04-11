import { Link } from 'react-router-dom';

const pageNotFound = () => {
    return (
        <div className="page-not-found">

            <h2>404 Page Not Found</h2>

            <p>Sorry! That page cannot be found</p>

            <Link to='/'>back to the Home Page ...</Link>

        </div>
    );
}
 
export default pageNotFound;