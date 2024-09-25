const Card = () => {
    const data = [
        {
            "id": 1,
            "image": "https://i.ibb.co.com/x3rfg89/IMG-20240913-WA0003.jpg",
            "name": "Product Name",
            "price": 49.99,
            "description": "This is a short description of the product. It highlights the key features of the product."
        },
        {
            "id": 2,
            "image": "https://i.ibb.co.com/CP8zMdk/IMG-20240913-WA0017.jpg",
            "name": "Another Product",
            "price": 39.99,
            "description": "A brief overview of another great product with amazing features."
        },
        {
            "id": 3,
            "image": "https://i.ibb.co.com/7vK05HT/IMG-20240913-WA0001.jpg",
            "name": "Sample Product",
            "price": 29.99,
            "description": "This product is designed for those who appreciate quality and affordability."
        },
        {
            "id": 4,
            "image": "https://i.ibb.co.com/CP8zMdk/IMG-20240913-WA0017.jpg",
            "name": "Premium Product",
            "price": 89.99,
            "description": "An exquisite product for customers who want the best in features and quality."
        }
    ];

    return (
       <div >
        <div>
        <h1 className="flex justify-center text-3xl font-serif my-10">Featured Products</h1>
        </div>
            <div className="flex flex-wrap justify-around m-8">
               
                {data.map(product => (
                    <div key={product.id} className="border-2 border-gray-300 bg-white rounded-lg shadow-md w-full overflow-hidden mb-4 text-center md:w-96 lg:w-80">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-auto" 
                        />
                        <div className="p-4">
                            <h2 className="text-xl mb-2">{product.name}</h2>
                            <p className="text-lg text-green-500 mb-2">${product.price.toFixed(2)}</p>
                            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    );
};

export default Card;
