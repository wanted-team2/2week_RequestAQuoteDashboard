const colors = {
  primary: '#323D45',
  gray: '#939FA5',
  blue: '#1565C0',
  skyBlue: '#2196F3',
  lightBlue: '#BBDEFB',
  warning: '#FFA000',
  border: '#E5E5E5',
};

const size = {
  borderRadius: 4,
};

const gap = {
  base: 4,
};

const theme = {
  colors,
  size,
  gap,
};

export type Theme = typeof theme;
export default theme;
