import SingleCoffee from "../components/SingleCoffee";


const Home = () => {

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://media.nbcwashington.com/2022/08/GettyImages-687635514.jpg?quality=85&strip=all&resize=1200%2C675)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Coffee FullStack project</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <SingleCoffee></SingleCoffee>
        </>
    );
};

export default Home;