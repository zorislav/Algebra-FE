import Button from 'react-bootstrap/Button';
import { VISIBILITY_TYPES } from '../constants/const.js';

function getButtonVariant(visibilityType, curentVisibilityType){
  return visibilityType === curentVisibilityType ? "dark" : "outline-dark";
};

const {ALL, ACTIVE, COMPLETED} = VISIBILITY_TYPES;

function VisibilityTolbar({visibilityType, onVisibilityChange}) {

  function handle(value){
    onVisibilityChange(value);
  }

  return (
    <>
      <Button size="sm" variant={getButtonVariant(visibilityType, ALL)} onClick={() => handle(ALL)}>All</Button>
      <Button size="sm" variant={getButtonVariant(visibilityType, ACTIVE)} onClick={() => handle(ACTIVE)}>Active</Button>
      <Button size="sm" variant={getButtonVariant(visibilityType, COMPLETED)}  onClick={() => handle(COMPLETED)}>Completed</Button>
    </>
  );
}

export default VisibilityTolbar;