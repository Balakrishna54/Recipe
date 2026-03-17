import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading, setRecipeList, setLoading } = useContext(GlobalContext);

  const handlePopularSearch = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...Please wait!</div>;

  return (
    <div>
      {recipeList && recipeList.length > 0 ? (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
          {recipeList.map((item) => <RecipeItem key={item.id} item={item} />)}
        </div>
      ) : (
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-20">
            <div className="container mx-auto text-center px-4">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Delicious Recipes Await
              </h1>
              <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
                Discover mouth-watering recipes from around the world. From quick meals to gourmet dishes, find your next favorite recipe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => handlePopularSearch("pizza")}
                  className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Explore Recipes
                </button>
                <button
                  onClick={() => handlePopularSearch("healthy")}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition duration-300"
                >
                  Healthy Options
                </button>
              </div>
            </div>
          </section>

          {/* Menu Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Menu Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                  <div className="text-6xl mb-4">🍕</div>
                  <h3 className="text-2xl font-semibold mb-2">Italian Cuisine</h3>
                  <p className="text-gray-600 mb-4">Authentic pasta, pizza, and more from Italy</p>
                  <button
                    onClick={() => handlePopularSearch("italian")}
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
                  >
                    View Recipes
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                  <div className="text-6xl mb-4">🥗</div>
                  <h3 className="text-2xl font-semibold mb-2">Healthy Salads</h3>
                  <p className="text-gray-600 mb-4">Fresh, nutritious salad recipes for every diet</p>
                  <button
                    onClick={() => handlePopularSearch("salad")}
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
                  >
                    View Recipes
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                  <div className="text-6xl mb-4">🍰</div>
                  <h3 className="text-2xl font-semibold mb-2">Desserts</h3>
                  <p className="text-gray-600 mb-4">Sweet treats and decadent desserts</p>
                  <button
                    onClick={() => handlePopularSearch("dessert")}
                    className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                  >
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      J
                    </div>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-gray-600">Food Blogger</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"This app has revolutionized my cooking! The recipes are easy to follow and absolutely delicious."</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      S
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Wilson</h4>
                      <p className="text-gray-600">Home Chef</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"I love how I can find recipes for any cuisine. The search feature is fantastic!"</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      M
                    </div>
                    <div>
                      <h4 className="font-semibold">Mike Johnson</h4>
                      <p className="text-gray-600">Fitness Enthusiast</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Great selection of healthy recipes. Helps me maintain my diet while enjoying tasty meals."</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
              <div className="max-w-2xl mx-auto">
                <form className="bg-white rounded-lg shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">FoodRecipe</h3>
                  <p className="text-gray-400">Your ultimate destination for delicious recipes from around the world.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Recipes</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Categories</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Categories</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Italian</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Asian</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Healthy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Desserts</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Email: info@foodrecipe.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Address: 123 Food St, Recipe City</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-400">&copy; 2024 FoodRecipe. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
