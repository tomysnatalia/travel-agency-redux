import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption currentValue={options[option.id]} setOrderOption={setOrderOption} {...option}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption:  PropTypes.func,
};

export default OrderForm;
