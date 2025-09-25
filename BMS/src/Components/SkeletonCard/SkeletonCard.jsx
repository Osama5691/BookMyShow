import React from "react";
import "../../css/SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-rating" />
      <div className="skeleton-text short" />
      <div className="skeleton-text" />
    </div>
  );
};

export default SkeletonCard;
