import { Link } from "react-router-dom";

const Search = () => {
  const phoneNumber = "4045206112";

  return (
    <>
      <button onClick={() => (window.location.href = `tel:${phoneNumber}`)}>
        CALL 911
      </button>

      <button type="button">Emergency Room Near Me</button>
      <div>
        <h1>SELECT FIRST AID INSTRUCTIONS BELOW</h1>
        <Link to="/CPR">
          <button type="button">CPR</button>
        </Link>
        <Link to="/Choking">
          <button type="button">CHOKING</button>
        </Link>
        <Link to="/Burns">
          <button type="button">BURN</button>
        </Link>
        <Link to="/Bleeding">
          <button type="button">BLEEDING</button>
        </Link>
      </div>
    </>
  );
};

export default Search;

// import { Link } from "react-router-dom";

// const Search = () => {
//   const phoneNumber = "4045206112";
//   return (
//     <>
//       <button onClick={() => (window.location.href = `tel:${phoneNumber}`)}>
//         CALL 911
//       </button>
//       <button type="button">My Location</button>
//       <button type="button">Emergency Room Near Me</button>

//       <Link to="/CPR">
//         <button type="button">CPR</button>
//       </Link>
//       <Link to="/Choking">
//         <button type="button">CHOKING</button>
//       </Link>
//       <Link to="/Burns">
//         <button type="button">BURN</button>
//       </Link>
//       <Link to="/Bleeding">
//         <button type="button">BLEEDING</button>
//       </Link>
//     </>
//   );
// };

// export default Search;
