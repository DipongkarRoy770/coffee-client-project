import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffees = useLoaderData()
    const {_id, name, tests, photoUrl, details, supplier, category, chef } = coffees;

    const updateCoffeeUser = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const tests = form.tests.value;
        const category = form.category.value
        const details = form.details.value
        const photoUrl = form.photo.value
        const updateCoffeeData = { name, chef, supplier, tests, category, details, photoUrl }
        console.log(updateCoffeeData)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    form.reset('')
                }

            })
    }
    return (
        <>
            <h1 className="my-4 text-center text-2xl text-fuchsia-400">Update coffee : {name}</h1>
            <div className="border-2 border-red-300 mx-4">
                <form onSubmit={updateCoffeeUser}>
                    <div className="md:flex px-4 md:px-12 gap-3 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" defaultValue={name ? name : ""} name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" placeholder="chef" defaultValue={chef ? chef : ''} name="chef" className="input input-bordered" required />

                        </div>
                    </div>

                    <div className="md:flex px-4 md:px-12 gap-3 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" placeholder="supplier" defaultValue={supplier ? supplier : ''} name="supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tests</span>
                            </label>
                            <input type="text" placeholder="tests" defaultValue={tests ? tests : ''} name="tests" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="md:flex px-4 md:px-12 gap-3 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="category" defaultValue={category ? category : ''} name="category" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="details" defaultValue={details ? details : ''} name="details" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control md:w-10/12 px-4 mx-auto">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="photoUrl" placeholder="photoUrl" defaultValue={photoUrl ? photoUrl : ''} name="photo" className="input input-bordered" required />

                    </div>
                    <div className="form-control my-6 md:w-10/12 px-4 mx-auto">
                        <input className="btn btn-warning" type="submit" value="Update Coffee" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateCoffee;