const RestaurantCard = ({data, isAdmin, onDelete, onUpdate}) => {
    return (
        <div>
            <img src="{data.image}" width= "150" />
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>{data.parkingLot ? "Parking Avalable" : "No Parking"}</p>

            {isAdmin && (
                <>
                <button onClick={() => 
                    onUpdate(data)}>Update</button>
                <button onClick={() => 
                    onDelete(data.restaurantID)}>Delete</button>
                    </>
            
            )}
        </div>
    );
};

export default RestaurantCard;