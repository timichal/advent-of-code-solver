export const sum = (values: number[], initialValue = 0) => values.reduce((total, currentValue) => total + currentValue, initialValue);

export default sum;
