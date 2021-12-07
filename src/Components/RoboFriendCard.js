import React from "react";

function RoboFriendCard({ id, username, name, email, random }) {
  return (
    <div className="robofriends_card">
      <img src={`https://robohash.org/${random}${id}?size=200x200`} alt={username} />
      <h2>{name}</h2>
      <p data-testid="email">{email}</p>
    </div>
  );
}

export default RoboFriendCard;
