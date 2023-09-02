import React, { useEffect, useState } from 'react';
import "../Style/search.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Container/productSlice';
import { AllClothes, SmallFooter, SmallLoading, SmallSearchNavbar } from '../Components';
import { MdProductionQuantityLimits } from "react-icons/md";

const Search = () => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector((state) => state.products);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);


    const filteredProducts = products.filter((product) => {
        if (searchTerm === "") {
            return true;
        } else {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    return (
        <>
            <SmallSearchNavbar />
            <div className='search__page__input__container'>
                <div className='search__page__input'>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Product . . .' type="text" />
                </div>
            </div>

            {loading ? (
                <SmallLoading />
            ) : (
                filteredProducts.length > 0 ? (
                    <AllClothes loading={loading} products={filteredProducts} />
                ) : (
                    <div className='no__products__yet'>
                        <div>
                            <div className='no__products__yet__icon'>
                                <MdProductionQuantityLimits fontSize={50} />
                            </div>
                            <h3>No Such Product</h3>
                        </div>
                    </div>
                )
            )}
            <SmallFooter />
        </>
    )
}

export default Search;
