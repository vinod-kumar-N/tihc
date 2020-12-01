import React from "react";
import templatePlaceHolderImg from "@Images/template-placeholder.png";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const LetterMessage = (props) => {
  const occasion = [
      { value: '0', label: '-Select-' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
      { value: '4', label: 'Four' }
  ];
  const defaultOption = occasion[0];
  const language = [
      { value: '0', label: '-Choose Language-' },
      { value: '1', label: 'Kannada' },
      { value: '2', label: 'English' },
      { value: '3', label: 'Hindi' },
      { value: '4', label: 'Telegu' }
  ];
  const defaultLanguage = language[0];
  const handWriting = [
      { value: '0', label: '-Select-' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'THree' },
      { value: '4', label: 'Four' }
  ];
  const defaultHandWriting = handWriting[0];
  return (
    
        <form className='tihlc-std-form'>
          <div className='form-row'>
            <div className='col-12 title-wrap'>
              <h3>Style your letter</h3>
            </div>
            <div className='form-group col-md-4'>
              <label htmlFor='inputEmail4' className='col-form-label'>
                Occasion
              </label>
              <Dropdown options={occasion} value={defaultOption}  />
              {/* <select className='form-control'>
                <option selected>-Select-</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select> */}
            </div>

            <div className='form-group col-md-4'>
              <label htmlFor='inputEmail4' className='col-form-label'>
                Choose Language
              </label>              
              <Dropdown options={language} value={defaultLanguage}  />
              {/* <select className='form-control'>
                <option selected>-Select-</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select> */}
            </div>

            <div className='form-group col-md-4'>
              <label htmlFor='inputEmail4' className='col-form-label'>
                Handwriting Style
              </label>           
              <Dropdown options={handWriting} value={defaultHandWriting}  />
              {/* <select className='form-control'>
                <option selected>-Select-</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select> */}
            </div>

            <div className='form-group col-md-4'>
              <label className='col-form-label template-design-main-label'>Template Design</label>
              <input
                type='radio'
                checked
                name='temp-design'
                className='form-check-input template-radio form-control'
                id='tempD1'
              />
              <label htmlFor='tempD1'>
                <img src={templatePlaceHolderImg} alt='Template Design' />
              </label>

              <input
                type='radio'
                name='temp-design'
                className='form-check-input template-radio form-control'
                id='tempD2'
              />
              <label htmlFor='tempD2'>
                <img src={templatePlaceHolderImg} alt='Template Design' />
              </label>

              <input
                type='radio'
                name='temp-design'
                className='form-check-input template-radio form-control'
                id='tempD3'
              />
              <label htmlFor='tempD3'>
                <img src={templatePlaceHolderImg} alt='Template Design' />
              </label>

              <input
                type='radio'
                name='temp-design'
                className='form-check-input template-radio form-control'
                id='tempD4'
              />
              <label htmlFor='tempD4'>
                <img src={templatePlaceHolderImg} alt='Template Design' />
              </label>
            </div>

            <div className='form-group col-md-4'>
              <label className='col-form-label'>Additional Notes</label>
              <textarea className='form-control additional-notes'></textarea>
            </div>
            <div className='col-12 yellow-saperator border border-warning'></div>
            <div className='col-12'>
              <h3>Compose your letter</h3>
            </div>
            <div className="col-12">
              <div className="row no-gutters">
                <div className='col-12 col-md-6 order-1 order-md-0 mb-3 mb-md-0'>
                  <button type='button' className='btn btn-primary blue-btn'>
                    Use Default Message
                  </button>
                </div>
                <div className='col-12 col-md-6 order-0 order-md-1'>
                  <div className='row no-gutters'>
                    <div className='col-6'>
                      <p className='word-count-sp'>
                        TotaL words Counts is <span>100</span>
                      </p>
                      <p className='word-charge-sp'>
                        For each word we charge{" "}
                        <span>
                          <i className='fa fa-inr'></i> 1
                        </span>
                      </p>
                    </div>
                    <div className='col-6'>
                      <div className='subtotal-wrap'>
                        <div>
                          <p>Subtotal</p>
                        </div>
                        <div className='currency-container'>
                          <p>
                            <i className='fa fa-inr'></i> 100
                          </p>
                        </div>
                      </div>
                      <p className='change-currency'>
                        <a href='#'>Price in USD</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <textarea className='form-control write-to'></textarea>
            </div>
            <div className='col-md-12 next-btn-container'>
              <a href='personal-step2.html' className='btn btn-primary blue-btn' onClick={() => props.handleChange($event, '2')}>
                Add Recipients
              </a>
            </div>
          </div>
        </form>
      
  );
};

export default LetterMessage;
