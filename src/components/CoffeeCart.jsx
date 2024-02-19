import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCart = ({ coffees, loadedCoffees, setLoadedCoffees }) => {
    const { _id, name, tests, photoUrl, details, supplier, category, chef } = coffees;
    // console.log(coffees)


    const handleDelete = (_id) => {
        console.log(_id, 'deleted cofee');


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = loadedCoffees.filter(cof => cof._id !== _id);
                            setLoadedCoffees(remaining)
                        }
                    })

            }
        });

    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="h-72 w-1/3 rounded-md"><img src={photoUrl} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name:{name}</h2>
                <p>Tests:{tests}</p>
                <p>Details :{details}</p>
                <p>Supplier :{supplier}</p>
                <p>Category: {category}</p>
                <h4>Chef:{chef}</h4>
                <div className="card-actions">
                    <button className="btn btn-primary">View</button>
                    <Link to={`/updateCoffee/${_id}`}>

                        <button className="btn btn-primary">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;