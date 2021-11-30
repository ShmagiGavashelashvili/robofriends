import React from "react";

function RoboFriendCard({ id, username, name, email, random }) {
  return (
    <div className="robofriends_card">
      <img src={`https://robohash.org/${random}${id}`} alt={username} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default RoboFriendCard;
