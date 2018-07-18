/**
 * @desc Find pet by ID
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** ID of pet to return */
  petId: number;
}

export const init = new defs.Pet();

export async function request(params) {
  return yourCustomFetch({
    url: '/pet/{petId}',
    params,
    method: 'get',
  });
}
