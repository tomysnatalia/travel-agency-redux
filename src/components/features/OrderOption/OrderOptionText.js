import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div className={styles.components}>
    <input
      type="text"
      value={currentValue.name}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionText;
