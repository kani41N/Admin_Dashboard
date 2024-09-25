import React from 'react';
import { FaRegCircle } from "react-icons/fa";

function RecentActivityItems({ item }) {
  return (
    <div className="d-flex activity-item">
      <div className="activity-label">{item.time}</div>
      <FaRegCircle className={item.color} />
      {
        item.highlight === '' ? (
          <div className="activity-content">{item.content}</div>
        ) : (
          <div className="activity-content">
            {/* Get the substring before the highlight */}
            {item.content.substring(0, item.content.indexOf(item.highlight))}

            {/* Highlighted text as a button */}
            <button
              className="highlight-button"
              style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => console.log("Button clicked")}
            >
              {item.highlight}
            </button>

            {/* Get the substring after the highlight */}
            {item.content.slice(item.content.indexOf(item.highlight) + item.highlight.length)}
          </div>
        )
      }
    </div>
  );
}

export default RecentActivityItems;
