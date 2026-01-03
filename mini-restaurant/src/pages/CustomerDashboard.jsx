import { useEffect, useState } from "react";
import { getRestaurants } from "../utils/localStorage";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
const  CustomerDashboard = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [parking , setParking] = useState("");

    useEffect(() => {
        setData(getRestaurants());

    }, []);

    const filteredData = data.filter((el) => {
        return (
            el.restaurantName.toLowerCase().includes(search.toLowerCase()) && (type === "" || el.type === type) && 
            (parking === "" || String(el.parkingLot) === parking)
        )
    });

    return (
        <div>
            <Navbar 
            setSearch={setSearch}
            setType={setType}
            setParking={setParking}
            />

            {filteredData.map((el) => (
                <RestaurantCard
                key={el.restaurantID} data={el} />
            ))}
        </div>
    );
};

export default CustomerDashboard;