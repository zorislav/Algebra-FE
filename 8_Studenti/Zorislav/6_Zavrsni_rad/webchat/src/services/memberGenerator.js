import generateName from 'sillyname';
import generateColor from 'randomcolor';

function getMember(){
  return {
    username: generateName(),
    color: generateColor()
  }
}

const defaultExport = {
  get: getMember
};

export default defaultExport;