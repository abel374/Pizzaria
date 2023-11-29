export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white  hover:shadow-md hover:shadow-blacktransition-all">
            <div className="text-center">
                <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <button className="mt-4 bg-primary text-white rounded-full px-2 py-2">Add to  Cart 2000 Kz
            </button>
        </div>
    );
}