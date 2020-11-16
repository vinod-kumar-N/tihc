import React from 'react'
import LeftComp from './leftSide';
import RightComp from './rightSide';

export default function index() {
  return (
    <div className="contaiener">
      <div className="row no-gutters m-5">
        <div className="col-6">
          <LeftComp />
        </div>
        <div className="col-6">
          <RightComp />
        </div>
      </div>
    </div>
  )
}
