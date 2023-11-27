import React from "react";
import "./style.css";
const ProfileDetails = () => {
  return (
    <div id="ProfileDetails">
      <div className="PersonalInformation">
        <table >
          <thead>

          <tr>
            <td>
              <h5>Profession </h5>
            </td>
            <td>
              <p>&nbsp;Student, Freelancer</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Residence    </h5>
            </td>
            <td>
              <p>Maharashtra, India</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>District  </h5>
            </td>
            <td>
              <p>Ahmednagar</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>City </h5>
            </td>
            <td>
              <p>Pathardi</p>
            </td>
          </tr>
          </thead>

        </table>
      </div>
    </div>
  );
};

export default ProfileDetails;
