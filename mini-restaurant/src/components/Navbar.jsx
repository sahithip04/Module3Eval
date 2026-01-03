import { useEffect, useRef } from "react";

const Navbar = ({ setSearch, setType, setParking}) => {
    const inputRef = useRef();

    useEffect(()=> {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input 
            ref={inputRef}
            placeholder="Search" 
            onChange={(e) => 
                setSearch(e.target.value)
            }/>

            <select onChange={(e) => 
                setType(e.target.value)}>
                    <option value="All"></option>
                    <option value="Rajasthani"></option>
                    <option value="Gujarati"></option>
                    <option value="Mughlai"></option>
                    <option value="Jain"></option>
                    <option value="Thai"></option>
                    <option value="North Indian"></option>
                    <option value="South Indian"></option>

                </select>

                <select onChange={(e) =>
                    setParking(e.target.value)}>
                        <option value="All"></option>
                        <option value="true">Parking</option>
                        <option value="false">No Parking</option>
                    </select>
        </div>
    );
};

export default Navbar;