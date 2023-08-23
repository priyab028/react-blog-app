import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PageNotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p>the page cannot be found</p>
      <Link to='/'>Back to homepage</Link>
    </div>
   );
}
 
export default PageNotFound;