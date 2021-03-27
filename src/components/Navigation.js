import React, { useState } from "react";
import EditProfile from "./EditProfile";

const Navigation = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [editProfile, setEditProfile] = useState(false);

  return (
    <>
      <div>
        <div onClick={() => setEditProfile(!editProfile)}>
          {currentUser.firstName}의 Notion
        </div>
        {editProfile ? <EditProfile /> : <></>}
      </div>
      <nav>
        <div>profile</div>
      </nav>
      <section>
        <div>메모하기</div>
        <div>계산기</div>
      </section>
      <footer>
        <div>휴지통</div>
      </footer>
    </>
  );
};

export default Navigation;
