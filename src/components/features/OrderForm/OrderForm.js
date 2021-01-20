import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripId, countryCode, tripName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    countryCode,
    tripName,

  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };


  payload.name === '' || payload.contact === '' ?
    alert('please check if the contact and name field has been completed')
    :
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  alert('order complete :)! Please wait for email with confirmation');
};

const OrderForm = ({tripCost, options, setOrderOption, tripId, countryCode, tripName}) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption currentValue={options[option.id]} setOrderOption={setOrderOption} {...option}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
        <Button onClick={() => sendOrder(options, tripCost, tripId, countryCode, tripName)}>Order now!</Button>
      </Col>
    </Row>

  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption:  PropTypes.func,
  tripName: PropTypes.any,
  tripId: PropTypes.any,
  countryCode: PropTypes.any,
};

export default OrderForm;
