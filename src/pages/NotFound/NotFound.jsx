const { NavLink } = require('react-router-dom');

const NotFound = () => {
  return (
    <div>
      <h1>{'Oops... Seems like something went wrong.'}</h1>
      <p>Here are some helpful links:</p>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
