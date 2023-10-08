import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { VISIBILITY_TYPES } from "../constants/const";

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

function getButtonVariant(visibilityType, currentVisibilityType) {
    return visibilityType === currentVisibilityType ? 'dark' : 'outline-dark';
  }

function VisibilityToolbar ({visibiltyType, onVisibilityChange}) {

    function handle(value) {
        onVisibilityChange(value);
    }

    return (
        <>
        <ButtonGroup className='mt-3'>
            <Button size='sm' variant={getButtonVariant(visibiltyType, ALL)} onClick={()=>handle(ALL)}>ALL</Button>
            <Button size='sm' variant={getButtonVariant(visibiltyType, ACTIVE)} onClick={()=>handle(ACTIVE)}>ACTIVE</Button>
            <Button size='sm' variant={getButtonVariant(visibiltyType, COMPLETED)} onClick={()=>handle(COMPLETED)}>COMPLETED</Button>
        </ButtonGroup>
        </>
    );

}

export default VisibilityToolbar;

VisibilityToolbar.propTypes = {
    onVisibilityChange: PropTypes.func,
    visibilityType: PropTypes.string
  };