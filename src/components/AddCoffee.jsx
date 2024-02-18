import Swal from 'sweetalert2'

const AddCoffee = () => {
    const addCoffeeUser = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const tests = form.tests.value;
        const category = form.category.value
        const details = form.details.value
        const photoUrl = form.photo.value
        const addCoffee = { name, chef, supplier, tests, category, details, photoUrl }
        console.log(addCoffee)
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    form.reset(' ')
                }

            })
    }

   
    return (
        <div className="border-2 border-red-300 mx-4">
            <form onSubmit={addCoffeeUser}>
                <div className="md:flex px-4 md:px-12 gap-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="chef" name="chef" className="input input-bordered" required />

                    </div>
                </div>

                <div className="md:flex px-4 md:px-12 gap-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="supplier" name="supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tests</span>
                        </label>
                        <input type="text" placeholder="tests" name="tests" className="input input-bordered" required />

                    </div>
                </div>
                <div className="md:flex px-4 md:px-12 gap-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="category" name="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="details" name="details" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control md:w-10/12 px-4 mx-auto">
                    <label className="label">
                        <span className="label-text">PhotoUrl</span>
                    </label>
                    <input type="photoUrl" placeholder="photoUrl" name="photo" className="input input-bordered" required />

                </div>
                <div className="form-control my-6 md:w-10/12 px-4 mx-auto">
                    <input className="btn btn-error" type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;