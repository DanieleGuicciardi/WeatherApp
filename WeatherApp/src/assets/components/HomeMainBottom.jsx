import React from "react";

const HomeMainBottom = () => {
  return(
    <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f7f7f7" }}>
      <h3 style={{ textAlign: "center" }}>🌍 Latest Weather News</h3>
      <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
        <li style={{ margin: "10px 0" }}>
          <a href="https://news.example.com/article1" target="_blank" rel="noopener noreferrer">
            Hurricane season begins with strong winds in Florida
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://news.example.com/article2" target="_blank" rel="noopener noreferrer">
            Heavy rainfall expected in Southeast Asia this week
          </a>
        </li>
      </ul>
    </div>
  )
}

export default HomeMainBottom;