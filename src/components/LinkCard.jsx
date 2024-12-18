import React from "react";

const LinkCard = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
      {title}
    </a>
  );
};

export default LinkCard;
