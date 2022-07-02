export default () => {
    const images = [
        ["/images/products/p-10.webp", "ON SALE"],
        ["/images/products/p-10.webp"],
        ["/images/products/p-10.webp", "ON SALE"],
        ["/images/products/p-10.webp"],
        ["/images/products/p-10.webp"],
    ];

    return (
        <>
            <h3> Product Grids</h3>
            <div className="conatiner px-6 max-w-7xl">
                <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {images.map(([image, onSale]) => (
                        <div className="bg-white drop-shadow-md rounded-sm hover:drop-shadow-lg hover:cursor-pointer duration-500">
                            <div className="flex flex-col space-y-2 p-3">
                                <div className="relative">
                                    {onSale && (
                                        <p className="absolute bg-custom-green px-3 inline-block font-bold text-white rounded-full  z-50">
                                            ON SALE
                                        </p>
                                    )}
                                    <img
                                        className="mx-auto hover:bg-red hover:scale-95 ease-in duration-150"
                                        src={image}
                                        alt="img"
                                    />
                                    <button className="absolute right-1 bottom-4 bg-custom-green w-10 h-10 rounded-full text-white">
                                        <svg
                                            className="mx-auto bi bi-plus"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="29"
                                            height="29"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                </div>

                                <div>
                                    <span className="inline-block font-bold">
                                        $3.00 - $5.00
                                    </span>
                                    <p className="text-[15px] mt-2">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Veniam, magni?
                                    </p>
                                    <small className="text-gray-500">
                                        1 each
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="bg-white drop-shadow-md rounded-sm hover:drop-shadow-lg hover:cursor-pointer duration-500">
                        <div className="flex flex-col space-y-2 p-3">
                            <div className="relative">
                                <p className="absolute bg-custom-green px-3 inline-block font-bold text-white rounded-full  z-50">
                                    ON SALE
                                </p>
                                <img
                                    className="mx-auto hover:bg-red hover:scale-95 ease-in duration-150"
                                    src="/images/products/p-10.webp"
                                    alt="img"
                                />
                                <button className="absolute right-1 bottom-4 bg-custom-green w-10 h-10 rounded-full text-white">
                                    <svg
                                        className="mx-auto bi bi-plus"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="29"
                                        height="29"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </button>
                            </div>

                            <div>
                                <span className="inline-block font-bold">
                                    $3.00 - $5.00
                                </span>
                                <p className="text-[15px] mt-2">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Veniam, magni?
                                </p>
                                <small className="text-gray-500">1 each</small>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};
