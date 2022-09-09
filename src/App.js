import "./App.css";
import Header from "./components/header/Header";
// import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Employees from "./components/content/Employees";
import React, { useState, useEffect } from "react";
import maleProfile from "./assets/img/maleProfile.jpg";
import femaleProfile from "./assets/img/femaleProfile.jpg";
import GroupTeamMembers from "./components/content/GroupTeamMembers";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/header/Nav";
import NotFound from "./components/content/NotFound";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
        image: maleProfile,
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
        image: femaleProfile,
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
        image: femaleProfile,
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
        image: maleProfile,
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
        image: maleProfile,
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
        image: femaleProfile,
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
        image: maleProfile,
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
        image: femaleProfile,
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
        image: femaleProfile,
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
        image: maleProfile,
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
        image: maleProfile,
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
        image: maleProfile,
      },
    ]
  );

  // updates the local storage for all employees
  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  // updates the local storage for selectedTeam
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    // console.log(event.target.value);
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    // console.log(transformedEmployees);
    setEmployees(transformedEmployees);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleTeamSelectionChange={handleTeamSelectionChange}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          }
        >
          {/* <Content /> */}
        </Route>
        <Route
          path="/GroupTeamMembers"
          element={
            <GroupTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
