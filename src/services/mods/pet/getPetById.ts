/**
 * @desc Find pet by ID
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** ID of pet to return */
  petId: number;
}

export const init = new defs.Pet();

export async function request(params) {
  return pontFetch({
    url: '/pet/{petId}',
    params,
    method: 'get',
  });
}
