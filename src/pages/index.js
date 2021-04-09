import React from 'react';
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, Spinner, InputGroup } from 'react-bootstrap';
import Meta from '../components/Meta';
import HolidayList from '../components/HolidayList';

const formatLocation = (location) => ({
  label: location.split('-').map((word) => word === 'and' ? word :
    `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`).join(' '),
  value: location,
});

const filterYears = (events, year) => events?.filter((s) =>
  s.date.includes(year));

const BASE_URL = 'https://www.gov.uk/bank-holidays.json';

const Home = () => {
  const [holidays, setHolidays] = React.useState(null);
  const [locations, setLocations] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  const [years, setYears] = React.useState(null);

  React.useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        setHolidays(data);

        const keys = Object.keys(data);
        setLocations([{
            label: "Select a location",
            value: '',
          },
          ...keys.map((k) => formatLocation(k))
        ]);
      })
      .catch(() => {
        toast.error('Error fetching holidays.');
      });
  }, []);

  React.useEffect(() => {
    if (selected) {
      const allYears = holidays[selected.division]?.events?.map((e) => e.date.substring(0, 4));
      const yearsDistinct = allYears.reduce((acc, curr) => {
        if (!acc?.includes(curr)) {
          return [...acc, curr];
        }

        return acc;
      }, []);

      setYears(!years ? [
        "Select a year",
        ...yearsDistinct,
      ] : yearsDistinct);
    }
  }, [selected?.division]);

  const onChangeLocation = React.useCallback((e) => {
    const selectedLocation = e.target.value;

    setSelected(selected?.year ? {
        ...selected,
        events: filterYears(
          holidays[selectedLocation].events, selected?.year) 
      } :
      holidays[selectedLocation]
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
    <Container>
      <Meta />
      <Container fluid className="mt-3">
        <Row className="justify-content-md-center text-center">
          <Col>
            <h3>UK Public Holidays 🌴</h3>
          </Col>
        </Row>
        {!holidays || !locations ? (
          <Row className="justify-content-md-center text-center">
            <Col>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-md-center text-center mt-3 mb-3">
            <Col md={6} lg={4} className="mb-1">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-location">Location</InputGroup.Text>
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
                  <InputGroup.Text id="inputGroup-year">Year</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  aria-label="Year"
                  aria-describedby="inputGroup-year"
                  as="select"
                  custom
                  disabled={!!!years}
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
        )}
        <Row className="justify-content-md-center mb-3">
          <Col md={12} lg={6}>
            <HolidayList
              holidays={selected?.events}
              showCount={!!selected && !!selected.year}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
