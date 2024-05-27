// src/ResponsiveTable.js
import React from "react";
import "./TableComponent.css";
import data from "./data";


const ResponsiveTable = () => {
  const ranksLogo = [
    { rank: 1, rankUrl: "images/rank1.jpeg" },
    { rank: 2, rankUrl: "images/rank2.webp" },
    { rank: 3, rankUrl: "images/rank3.jpeg" },
  ];

  const sortedData = data.sort((a, b) => b.age - a.age);
  const processedData = sortedData.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  const firstProfile = processedData.length > 0 ? processedData[0] : null;

  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-container">
          <h1 className="heading_main">
            <img className="main-logo" src={"logo192.png"}></img>
            Employees Activity Dashboard
          </h1>
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="rank-heading">Rank</th>
                <th>Name</th>
                <th>Designation</th>
                <th>No. of hours worked</th>
                <th>Changes</th>
              </tr>
            </thead>
            <tbody>
              {processedData.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    {index < 3 && ranksLogo[index] && (
                      <img
                        className="rank_logo"
                        src={ranksLogo[index].rankUrl}
                        alt=""
                      ></img>
                    )}
                  </td>
                  <td data-label="ID" style={{fontWeight:600}}>{item.id}</td>
                  <td data-label="Name">
                    <div className="name-cell">
                      <img
                        className="profile-photo"
                        src={item.imageUrl}
                        alt=""
                      />
                      <h4 style={{margin:0,fontWeight:600}}>{item.name}</h4>
                    </div>
                  </td>
                  <td data-label="designation">{item.designation}</td>
                  <td data-label="hours">{item.hours}</td>
                  <td data-label="changes">
                    {item.arrow}
                    {item.changes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {firstProfile && (
          <div className="profile-section">
            <div className="date-time">{currentDateTime}</div>
            <div className="image-container">
              <img
                className="top-profile-image"
                src={firstProfile.imageUrl}
                alt="Sample"
              />
              <h3 className="certi_heading">Employee Of The Month</h3>
              <h6 className="certi_name">{firstProfile.name}</h6>
              <p className="certi_designation">{firstProfile.designation}</p>
              <img
                className="end_certi_image"
                src={"images/endImageCertificate.jpg"}
                alt="image"
              ></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveTable;
