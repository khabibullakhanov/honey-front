import React, { useState, useEffect } from 'react'
import "./OurProducts.css"
import { useDispatch, useSelector } from "react-redux"
import { acLoading } from '../../Redux/Loading'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Pagination } from "../Pagination/Pagination"
import das from "../../Assets/Images/background.jpg"

export function OurProducts() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(16)
    const [data, setData] = useState([])

    const refreshPr = useSelector((state) => state.relodeProduct)

    useEffect(() => {
        dispatch(acLoading(true));
        axios(`${"https://honey.pandashop.uz/product/view"}`, {
            method: "GET",
            headers: {},
        })
            .then((res) => {
                dispatch(acLoading(false));
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
                dispatch(acLoading(false));
            });
    }, [dispatch, refreshPr]);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div id='our-products-main-conatainer'>
            <div id='our-products-main-inside-container'>
                {currentPosts.map((item, index) => {
                    return (
                        <div key={index} id='product-card'
                            onClick={() => {
                                navigate(`/product_view/${item.id}`);
                            }}
                        >
                            <figure id='product-card-figure'>
                                <img src={item.img[0]} alt="" />
                            </figure>
                            <div id='product-card-text'>
                                <h3>Name : {item.name} {item.weight} kg</h3>
                                <p>{item.price} so'm</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
