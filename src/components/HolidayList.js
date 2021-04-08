import React from 'react';
import styled from 'styled-components';
import {Button, Badge, ListGroup} from 'react-bootstrap';

const ListItemStyled = styled(ListGroup.Item)`
  span {
    &:nth-child(1) {
      float: left;
    }
    &:nth-child(2) {
      float: right;
    }
  }
`;

const HolidayList = ({holidays, showCount}) => (
  <>
    {showCount &&
      <Button variant="success">
        Holidays <Badge variant="dark">{holidays.length}</Badge>
        <span className="sr-only">Holiday count</span>
      </Button>
    }
    <ListGroup className="mt-2">
      {holidays?.map((holiday, i) => (
        <ListItemStyled key={`hol-${i}`}>
          <span>{holiday.title}</span>
          <span>({holiday.date})</span>
        </ListItemStyled>
      ))}
    </ListGroup>
  </>
);

export default HolidayList;
