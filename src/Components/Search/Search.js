import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { acSearch } from "../../Redux/Search";
import "./Search.css"
import axios from 'axios';


export function Search() {
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    return (
        <div className="search-main-container">
            <h1 id='order-header-text'>Buyurtmangizni ko'rish uchun Telefon rqamingizni kiriting</h1>
            <form className="order-sec1-search-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(acSearch(e.target.phone.value));
                    axios(`https://honey.pandashop.uz/my/order`, {
                        headers: {
                            phone: search,
                        },
                    })
                        .then((res) => {
                            console.log(res.data);
                        })
                        .catch((err) => {
                            console.log(err.response.data);
                            console.log(err.response);
                        })
                }}>
                <input
                    autoComplete='off'
                    type="number"
                    name="phone"
                    placeholder="Telefon raqamingizni kiriting"
                    value={search}
                    onChange={(e) => {
                    }}
                />
                <button>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
}

export default Search;
