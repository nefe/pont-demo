/**
 * @desc Updates a pet in the store with form data
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** ID of pet that needs to be updated */
  petId: number;
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

export const init = undefined;

export async function request(params) {
  return yourCustomFetch({
    url: '/pet/{petId}',
    params,
    method: 'post',
  });
}
