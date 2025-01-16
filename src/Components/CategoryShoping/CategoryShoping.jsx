import { Link } from "react-router-dom";
import useCategoryShop from "../../Hooks/useCategoryShop";



const CategoryShoping = () => {
  const [categoryItems] = useCategoryShop();

  return (


    <div className="relative w-full mt-14 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co.com/j8yd3ty/1.png)' }}>
      <div className="absolute top-0 left-0 w-full h-full mix-blend-multiply bg-sky-300 bg-opacity-20 "></div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full py-8" >
        <div className="md:w-1/4 px-2">
          <h2 className="text-3xl font-semibold text-center md:text-left">Discover Your <span className="text-cyan-500">Beauty Essentials</span></h2>
          <p className="hidden md:block pt-4 text-justify">Explore our curated collection of cosmetics tailored to enhance your unique beauty.
            From luxurious skincare to vibrant makeup must-haves, find everything you need to create your perfect look. Shop by category and let your beauty shine!</p>
        </div>
        <div className="pt-6 md:pt-0 grid grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-3 md:gap-2">
          {
            categoryItems && categoryItems.map(item =>
              <div key={item._id} className="group "

              ><Link to={`/collection/${item.title}`}>
                  <div className="hero rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 bg-cyan-200"
                    style={{
                      backgroundImage: `url(${item?.image || item?.imgLink})`
                     
                    }}>
                    <div className="hero-overlay bg-opacity-0 group-hover:bg-opacity-10"></div>
                    <div className="hero-content text-neutral-content text-center">
                      <div className="relative max-w-md flex justify-center items-center" >


                        <p className="mb-5 absolute -top-28 group-hover:top-full transition-all duration-700 ease-in-out font-Krona font-semibold text-white">
                          {item.title}
                        </p>

                      </div>
                    </div>

                  </div>

                </Link>

              </div>)
          }

        </div>

      </div>

    </div>


  );
};

export default CategoryShoping;