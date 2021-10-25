import fetch from './fetch';
import create from './create';
import remove from './remove';
import update from './update';

const api = {
  ...fetch,
  ...create,
  ...remove,
  ...update,
}

export default api;