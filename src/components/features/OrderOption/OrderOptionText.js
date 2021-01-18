import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({name}) => (
  <div className={styles.components}>
    <input
      type="text"
      name={name}
    />
  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
};


export default OrderOptionText;
