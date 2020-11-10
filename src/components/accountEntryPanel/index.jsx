import React from 'react';
import './style.scss';

export default function index(props) {
  const { leftComp, rightComp } = props
  return (
    <div className="account-entry-wrapper">
      <div className="account-entry-content">
        <div className="account-entry-left">{leftComp}</div>
        <div className="account-entry-right">{rightComp}</div>
      </div>
    </div>
  );
}
