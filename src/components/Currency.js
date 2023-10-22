import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_Currency',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-success'> Currency (€ Europe) {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option className='alert alert-success' value="£$">$ Dollar</option>
        <option className='alert alert-success' value="£">£ Pound</option>
        <option className='alert alert-success' value="€">€ Europe</option>
        <option className='alert alert-success' value="₹">₹India</option>
      </select>	
      }	
    </div>
    );
};

export default Location;