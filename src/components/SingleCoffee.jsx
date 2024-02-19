import { useLoaderData } from "react-router-dom";
import CoffeeCart from "./CoffeeCart";
import { useState } from "react";


const SingleCoffee = () => {
    const coffee = useLoaderData()
    const[loadedCoffees ,setLoadedCoffees] = useState(coffee) 
    return (
        <>
            <h2 className="text-2xl text-center text-pink-300 my-6">My Coffee House</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 px-5">
                {
                    coffee.map(coffees => <CoffeeCart
                        key={coffees._id}
                        coffees={coffees}
                        loadedCoffees={loadedCoffees}
                        setLoadedCoffees={setLoadedCoffees}
                    ></CoffeeCart>)
                }
            </div>
        </>
    );
};

export default SingleCoffee;