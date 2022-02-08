const colors = {
  primary: '#323D45',
  gray: '#939FA5',
  blue: '#1565C0',
  skyBlue: '#2196F3',
  lightBlue: '#BBDEFB',
  warning: '#FFA000',
  white: '#FFF',
  darkGray: '#323D45',
};

const size = {
  borderRadius: 4,
};

const device = {
  mobile: `(max-width: 768px)`,
};

const gap = {
  base: 4,
};

const theme = {
  colors,
  size,
  gap,
  device,
};

export type Theme = typeof theme;
export default theme;
