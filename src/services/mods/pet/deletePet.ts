/**
 * @desc Deletes a pet
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** api_key */
  api_key?: string;
  /** Pet id to delete */
  petId: number;
}

export const init = undefined;

export async function request(params) {
  return yourCustomFetch({
    url: '/pet/{petId}',
    params,
    method: 'delete',
  });
}
