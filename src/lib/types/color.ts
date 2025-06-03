type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type HSV = `hsv(${number}, ${number}, ${number})`;
type HSl = `hsl(${number}, ${number}, ${number})`;
type CMYK = `cmyk(${number}, ${number}, ${number}, ${number})`;

export type Color = RGB | RGBA | HEX | HSV | HSl | CMYK;
