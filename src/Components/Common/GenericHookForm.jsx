import { useState } from "react";

export const useForm = initialObject => {
  const [values, setValues] = useState(initialObject);
  const nestedObjectSet = (obj, path, value) => {
    let schema = obj;
    const pList = path.split(".");
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      const elem = pList[i];
      if (!schema[elem]) schema[elem] = {};
      schema = schema[elem];
    }
    schema[pList[len - 1]] = value;
  };

  const handleOnChange = event => {
    const newValues = Object.assign({}, values);
    nestedObjectSet(newValues, event.target.id, event.target.value);
    setValues(newValues);
  };

  return {
    values: values || initialObject,
    setValues,
    reset: () => setValues({}),
    bind: {
      onChange: handleOnChange
    }
  };
};