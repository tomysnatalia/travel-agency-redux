import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div className={styles.component}>
    <DatePicker
      type="date"
      className={styles.input}
      selected={currentValue}
      onChange={(date) => setOptionValue(date)}
      placeholderText={'pick a day'}

    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};




export default OrderOptionDate;
