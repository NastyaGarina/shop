import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { filterDevices } from '../../actions/DeviceActions';

export const Filter = () => {
  const [category, setCategory] = useState('all');
  const [gender, setGender] = useState('all');

  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-2">
          <select
            className="form-control"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}>
            <option value="all">All</option>
            <option value="футболка">футболка</option>
            <option value="толстовка">толстовка</option>
          </select>
        </div>
        <div className="col-md-2 ">
          <select
            className="form-control"
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
            }}>
            <option value="all">All</option>
            <option value="женская">женская</option>
            <option value="мужская">мужская</option>
          </select>
        </div>
        <div className="col-md-2">
          <Button
            variant="danger"
            onClick={() => {
              dispatch(filterDevices(category, gender));
            }}>
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};
