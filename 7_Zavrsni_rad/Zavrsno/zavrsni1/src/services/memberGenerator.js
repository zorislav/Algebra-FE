import generateName from "sillyname";
import generateColor from "randomcolor";

function getMember() {
  return {
    username: generateName(),
    color: generateColor()
  };
}

export default {
  get: getMember
};
