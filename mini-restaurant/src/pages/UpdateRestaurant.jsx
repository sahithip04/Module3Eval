import { useLocation, useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";
import { useState } from "react";

const UpdateRestaurant = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [form, setForm] = useState(state);

    const update = () => {
        if(!confirm("Are you sure you want to update?"))
            return;

        const updated = getRestaurants().map((el) => el.restaurantID ? form :el);
        saveRestaurants(updated);
        alert("Updated Successfully");
        navigate("/admin/dashboard");
    };

    return (
        <div>
            <input 
            value={form.restaurantName} 
            onChange={(e) => 
                setForm({...form,
                    restaurantName: e.target.value})
            }/>
            <button onClick={update}>Update</button>
        </div>
    );
};

export default UpdateRestaurant;