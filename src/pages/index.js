import React from 'react';
import {toast} from 'react-toastify';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import Meta from '../components/Meta';
import HolidayList from '../components/HolidayList';
import Options from '../components/Options';
import {formatLocation} from '../utils/helpers';

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
            value: '-1',
          },
          ...keys.map(formatLocation),
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
          <Options
            setSelected={setSelected}
            setLocations={setLocations}
            selected={selected}
            holidays={holidays}
            locations={locations}
            years={years}
          />
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
