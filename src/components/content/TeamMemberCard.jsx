import React from "react";

const TeamMemberCard = ({
  employee,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return (
    <div
      key={employee.id}
      className={
        employee.teamName === selectedTeam ? "card mt-2 standout" : "card mt-2"
      }
      id={employee.id}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      <img src={employee.image} alt="" className="card-img-top img-fluid" />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: </b> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
