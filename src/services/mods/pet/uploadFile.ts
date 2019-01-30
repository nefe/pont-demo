/**
 * @desc uploads an image
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** ID of pet to update */
  petId: number;
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: File;
}

export const init = new defs.ApiResponse();

export async function request(params) {
  return pontFetch({
    url: '/pet/{petId}/uploadImage',
    params,
    method: 'post',
  });
}
