import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { VISIBILITY_TYPES } from "../constants/const";

function getButtonVariant(visibilityType, currentVisibilityType) {
  return visibilityType === currentVisibilityType ? "dark" : "outline-dark";
}

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

function VisibilityToolbar({ visibilityType, onVisibilityChange }) {
  function handle(value) {
    onVisibilityChange(value);
  }

  return (
    <ButtonGroup>
      <Button
        size="sm"
        variant={getButtonVariant(visibilityType, ALL)}
        onClick={() => handle(ALL)}
      >
        ALL
      </Button>
      <Button
        size="sm"
        variant={getButtonVariant(visibilityType, ACTIVE)}
        onClick={() => handle(ACTIVE)}
      >
        Active
      </Button>
      <Button
        size="sm"
        variant={getButtonVariant(visibilityType, COMPLETED)}
        onClick={() => handle(COMPLETED)}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}

export default VisibilityToolbar;
