import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, setRecipeList, handleSubmit } = useContext(GlobalContext);

  const resetHome = () => {
    setRecipeList([]);
    setSearchParam("");
  };

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"} onClick={resetHome} className="inline-flex items-center gap-2 text-gray-900 hover:text-orange-600 transition duration-300">
          <span className="text-xl">🍲</span>
          <span>FoodRecipe</span>
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search recipes..."
          className="border border-gray-300 px-4 py-2 rounded-full outline-none lg:w-96 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        <button
          type="submit"
          className="text-gray-700 hover:text-orange-600 transition duration-300"
        >
          Search
        </button>
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            end
            onClick={resetHome}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition duration-300 ${
                isActive
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition duration-300 ${
                isActive
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
