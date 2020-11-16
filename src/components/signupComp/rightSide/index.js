import React from 'react';
import FormInput from '../../formInputComp';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './rightSideDesign.css';

const rightSideDesign = () =>{
  const  inputReg = [
        {id:1,type:"text",label:"Full Name", Placeholder:"Full Name", name:"Name" },
        {id:2,type:"text",label:"Email", Placeholder:"Email", name:"email" },
        {id:3,type:"text",label:"Confirm Email", Placeholder:"Confirm Email", name:"email" },
        {id:4,type:"text",label:"Mobile Number", Placeholder:"+91 ", name:"number" }
    ]
    const options = [
        { value: '0', label: 'Country' },
        { value: 'India', label: 'India' },
        { value: 'USA', label: 'USA' },
        { value: 'China', label: 'China' },
        { value: 'Srilanka', label: 'Srilanka' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Other', label: 'Other' }
      ];
      const defaultOption = options[0];
    return(
        <div className="row no-gutters p-3 RightSideDesign">
            <div className="col-12">
                <h1>Create my Account</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div>
            <div className="col-12">
                {inputReg.map(items =>{
                    return(
                    <FormInput
                    key={items.id}
                    type={items.type}
                    label={items.label}
                    placeholder={items.Placeholder}
                    name={items.name}
                />)
                })}
            </div>
            <div className="col-12 mt-3">                
                <Dropdown options={options}  value={defaultOption} placeholder="Select/Seleccione" />
            </div>
            <div className="col-12 mt-3">
                <button className="Reg-btn">Register</button>
            </div>
            <div className="col-12 text-center mt-2">
                <p>By signing Up, I agree to <a href="#">terms & conditions</a>& <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    )
}

export default rightSideDesign;