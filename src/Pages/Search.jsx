import React, { useEffect } from 'react';
import "../Style/search.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Container/productSlice';
import { AllClothes } from '../Components';

const Search = () => {
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <>
            <div className='search__page__input__container'>
                <div className='search__page__input'>
                    <input placeholder='Search Product . . .' type="text" />
                </div>
            </div>
            <AllClothes loading={loading} products={products} error={error} />
        </>
    )
}

export default Search