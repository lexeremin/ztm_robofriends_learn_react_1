import React from "react";

const Card = ({id, name, email}) => {
    return (
    <div className="bg-teal-700 text-white hover:bg-white hover:text-black rounded-lg p-8 grow-4">
        <img className="mx-auto" alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <div className="text-center">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;
