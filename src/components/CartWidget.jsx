import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget() {
  return (
    <Button variant="warning">
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: '#df2ac7' }}
        fontSize="1.3rem"
        className="mx-2"
      />
      <Badge bg="danger">9</Badge>
    </Button>
  );
}

export default CartWidget;
