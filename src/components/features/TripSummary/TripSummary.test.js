import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);

    expect(component.find('Link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render correct image', () => {
    const expectedImageAlt = 'Lorem ipsum';
    const expectedImageSrc = 'image.jpg';

    const component = shallow(<TripSummary image={expectedImageSrc} name={expectedImageAlt} />);

    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
  });

  it('should render correct name, cost, days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '9000';
    const expectedDays = 7;

    const component = shallow(<TripSummary
      id="id"
      image="name"
      name={expectedName}
      days={expectedDays}
      cost={expectedCost} />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').at(0).text()).toEqual(expectedDays + ' days' + 'from ' + expectedCost);
  });

  it('should throw error without required props (id, image, name, cost, days', () => {
    const component = shallow(<TripSummary />);
    expect(() => shallow(component)).toThrow();
  });

  it('should not render span if tag is false', () => {
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost="dolar"
        days={1}
      />
    );
    console.log(component.debug());
    expect(component.hasClass('tags')).toBe(false);
  });

  it('should render spans with tags', () => {
    const expectedTags = ['beach', 'pool', 'spa'];
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost="dolar"
        tags={expectedTags}
        days={1}
      />
    );
    console.log(component.debug());
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });





});
