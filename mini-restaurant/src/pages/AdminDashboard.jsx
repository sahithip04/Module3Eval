import { useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [parking, setParking]  = useState("");

    const [form, setForm] = useState ({
        restaurantName : "",
        address : "",
        type : "Rajasthani",
        parkingLot : true,
        image : "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

    });

    const navigate = useNavigate();
    
}