
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import { VISIBILITY_TYPES } from "../constants/const";

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

function getButtonVariant(visibilityType, currentVisibilityType) {
  return visibilityType === currentVisibilityType ? 'dark' : 'outline-dark';
}

function VisibilityToolbar({visibilityType, onVisibilityChange}) {

  function handle(value) {
    onVisibilityChange(value);
  }

  return (
    <>
      <ButtonGroup className='mt-3'>
        <Button size="sm" variant={getButtonVariant(visibilityType, ALL)} onClick={() => handle(ALL)}>ALL</Button>
        <Button size="sm" variant={getButtonVariant(visibilityType, ACTIVE)} onClick={() => handle(ACTIVE)}>ACTIVE</Button>
        <Button size="sm" variant={getButtonVariant(visibilityType, COMPLETED)} onClick={() => handle(COMPLETED)}>COMPLETED</Button>
      </ButtonGroup>
    </>
  );

}

export default VisibilityToolbar;

VisibilityToolbar.propTypes = {
  onVisibilityChange: PropTypes.func,
  visibilityType: PropTypes.string
};