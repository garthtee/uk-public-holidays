import React from 'react';
import {Row, Col, Form, InputGroup} from 'react-bootstrap';
import {filterYears} from '../utils/helpers';

const Options = ({
  setSelected,
  selected,
  holidays,
  locations,
  years,
}) => {
  const onChangeLocation = React.useCallback((e) => {
    const selectedLocation = e.target.value;

    setSelected(selected?.year ? {
        ...selected,
        events: filterYears(
          holidays[selectedLocation].events, selected?.year),
      } :
      holidays[selectedLocation],
    );
  }, [selected, holidays]);
  
  const onChangeYear = React.useCallback((e) => {
    const selectedYear = e.target.value;

    setSelected({
      ...selected,
      year: selectedYear,
      events: filterYears(holidays[selected.division]?.events, selectedYear),
    });
  }, [selected, holidays]);
  
  return (
    <Row className="justify-content-md-center text-center mt-3 mb-3">
      <Col md={6} lg={4} className="mb-1">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-location">
              Location
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control 
            aria-label="Location"
            aria-describedby="inputGroup-location"
            as="select"
            custom
            onChange={onChangeLocation}
          >
            {locations?.map(({label, value}) => (
              <option
                key={`location-${value}`}
                value={value}
              >
                {label}
              </option>
            ))}
          </Form.Control>
        </InputGroup>
      </Col>
      <Col md={6} lg={4}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-year">
              Year
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            aria-label="Year"
            aria-describedby="inputGroup-year"
            as="select"
            custom
            disabled={!years}
            onChange={onChangeYear}
            >
            {years?.map((year) => (
              <option
                key={`year-${year}`}
                value={year}
              >
                {year}
              </option>
            ))}
          </Form.Control>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Options;
