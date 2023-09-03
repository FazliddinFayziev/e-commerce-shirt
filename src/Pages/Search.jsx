import React, { useEffect, useState } from 'react';
import "../Style/search.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Container/productSlice';
import { AllClothes, SmallFooter, SmallLoading, SmallSearchNavbar } from '../Components';
import { MdProductionQuantityLimits } from "react-icons/md";
import { language } from '../Functions/language';
import { useGlobalContext } from '../Context/context';

const Search = () => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector((state) => state.products);
    const [searchTerm, setSearchTerm] = useState('');

    const { activeLanguage } = useGlobalContext();

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
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={`${language(activeLanguage).search_product} . . .`} type="text" />
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
                            <h3>{language(activeLanguage).no_such_product}</h3>
                        </div>
                    </div>
                )
            )}
            <SmallFooter />
        </>
    )
}

export default Search;
