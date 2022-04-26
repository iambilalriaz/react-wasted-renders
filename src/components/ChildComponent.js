import React, { memo, useEffect } from 'react';

const ChildComponent = ({ title, getData }) => {
  useEffect(() => {
    getData('users');
  }, [getData]);
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
export default memo(ChildComponent); //Component will not re-render when props do not change
