import React from "react";
import UserInfo from "./UserInfo";

// Parent component stores user details and passes them down
function UserProfile() {
  const user = {
    name: "Vyshnavi",
    age: 21
  };

  return (
    <div>
      <h1>User Profile</h1>
      {/* Pass props to child */}
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;