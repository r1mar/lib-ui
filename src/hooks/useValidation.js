/**
 * @callback assertRequired
 * @param {object} props props object of called component
 * @param {string} name name of required prop
 * @returns {void}
 */

/**
 * @typedef Result
 * @property {object} container
 * @property {assertRequired} container.assertRequired asserts property with given name is in props object
 */

/**
 * 
 * @param {string} targetComponent component name for error message
 * @param {object} [i18n] Result of useTransaltion('use-validation)
 * @returns {Result}
 */
export default function useValidation(targetComponent, i18n) {
  
  return {
    assertRequired: (props, name) => {
      if(!props[name]) {
        throw new Error(i18n.t('missed-prop', {
          name,
          targetComponent
        }));
      }
    },
    checkEnumFallback: (props, name, prefix, fallback, enumValues, onInvalid) => {
      if(props[name] && enumValues.indexOf(props[name]) >= 0) {
        return [
          `${prefix}-${props[name]}`,
          null
        ];
    
      } else {
        let result = [
          fallback,
          props[name] ? i18n.t('enum-fallback', {name, targetComponent, value: props[name]}) : false
        ];

        return result;
    
      }
    }
  };
}