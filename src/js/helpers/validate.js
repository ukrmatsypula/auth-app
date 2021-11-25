const regExpDic = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type.
 * @param {HTMLInputElement} el
  @returns {Boolean} - Return true if input valid or doesn't has data required attr.
 */
export function validate(el) {
  const regExpName = el.dataset.required;
  if (!regExpDic[regExpName]) {
    return true;
  }

  return regExpDic[regExpName].test(el.value);
}
