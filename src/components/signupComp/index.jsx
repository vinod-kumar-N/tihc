import React from 'react'
import LeftComp from './leftSide';
import RightComp from './rightSide';

export default function index() {
  return (
    <div className="contaiener">
      <div className="row no-gutters m-5">
        <div className="col-6">
          <LeftComp
            heading="Sign In with us"
            text="Aliguam elementum metus suscipit erot suscipit fermentum utac nigh"
            button="sign In"
            class="sign-in-container  SignUp-Container"
            mainclass="row no-gutters bg-overlay LeftSideDesign" />
        </div>
        <div className="col-6">
          <RightComp />
        </div>
      </div>
    </div>
  )
}