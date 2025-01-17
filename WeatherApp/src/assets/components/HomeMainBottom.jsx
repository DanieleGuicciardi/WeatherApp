import React from "react";

const HomeMainBottom = () => {
  return(
    <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f7f7f7" }}>
      <h3 style={{ textAlign: "center" }}>🌍 Latest Weather News</h3>
      <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.monroecounty-fl.gov/1037/Hurricane-History-Info" target="_blank" rel="noopener noreferrer">
            Hurricane season begins with strong winds in Florida
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://disasterphilanthropy.org/disasters/2024-south-asia-floods/" target="_blank" rel="noopener noreferrer">
            Heavy rainfall expected in Southeast Asia this week
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.repubblica.it/italia/2024/09/06/news/estate_2024_caldo_record_copernicus-423482080/" target="_blank" rel="noopener noreferrer">
            Never has a summer been so hot, science confirms.
          </a>
        </li>
      </ul>
    </div>
  )
}

export default HomeMainBottom;