import { CodeGenerator, Interface } from "pont-engine";

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode();
    const requestParams = bodyParmas ? `params, bodyParams` : `params`;

    return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import yourCustomFetch from '../../../yourCustomFetch';

    export ${inter.getParamsCode()}
    export const init = ${inter.response.initialValue};

    export async function request(${requestParams}) {
      return yourCustomFetch({
        url: '${inter.path}',
        ${bodyParmas ? "params: bodyParams" : "params"},
        method: '${inter.method}',
      });
    }
   `;
  }
}
