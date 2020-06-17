import React from 'react';
import ShotGlassIcon from '@material-ui/icons/LocalDrink';
import './Strength.css';

import { ALCOHOL_PER_SHOT_IN_OZ } from './constants';

const Strength = ({strength, totalVolume}) => {
  const shots = Math.round(((strength / 100) * totalVolume) / ALCOHOL_PER_SHOT_IN_OZ);
  const iconArray = (new Array(shots)).fill(1);
  return (
    <div className="Strength">
      <span className="Strength-shadow">
        {iconArray.map((fill, index) => <ShotGlassIcon key={index} />)}
      </span>
      <span className="Strength-icons">
        {iconArray.map((fill, index) => <ShotGlassIcon key={index} />)}
      </span>
    </div>
  );
};

export default Strength;
