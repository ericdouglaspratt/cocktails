import React from 'react';
import Slider from '@material-ui/core/Slider';

import Strength from './Strength';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 33,
    label: '1',
  },
  {
    value: 66,
    label: '2',
  },
  {
    value: 100,
    label: '3',
  },
];

function valuetext(value) {
  const index = marks.findIndex((mark) => mark.value === value);
  return index === 0 ? 'all' : index === 1 ? `${index} shot` : `${index} shots`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

const StrengthSlider = () => {
  return (
    <Slider
      defaultValue={0}
      valueLabelFormat={valueLabelFormat}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-restrict"
      step={null}
      valueLabelDisplay="auto"
      marks={marks}
    />
  );
};

export default StrengthSlider;
