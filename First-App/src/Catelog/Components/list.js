import { Link } from "react-router-dom";

function Catelog() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ol>
        <li>
          Rose |<Link to="/details">details</Link>|
          {/* <Link to="update">Update</Link>|
          <Link to="delete">delete</Link>| */}
        </li>
        <li>
          Lotus |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
        <li>
          Lily |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
        <li>
          Jasmine |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
        <li>
          Gerbera |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
      </ol>
    </div>
  );
}
export default Catelog;
