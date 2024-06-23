import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
  return (
    <div className="card">
      <Skeleton height={200} style={{ marginBottom: 10 }} />
      <div className="card-body">
        <Skeleton count={1} height={20} style={{ marginBottom: 10 }} />
        <Skeleton count={1} height={15} width={`60%`} />
      </div>
      <div className="card-footer">
        <Skeleton count={1} height={30} width={`80%`} />
      </div>
    </div>
  );
};

export default SkeletonCard;
