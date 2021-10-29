import { colors } from "@mui/material";

const white = "#FFFFFF";
const black = "#000000";
const secondaryGray = "#94979B";
const labelGray = "#484848";
const beige = "#f9f9f9";

export const palette = {
  black,
  white,
  beige,
  primary: {
    contrastText: white,
    dark: "#014fd1",
    main: "#3A84FF",
    light: "#619cfe",
  },
  secondary: {
    contrastText: white,
    dark: colors.lime[900],
    main: secondaryGray,
    light: colors.lime["400"],
  },
  tetriary: {
    contrastText: black,
    dark: "#d5d5d5",
    main: "#e0e0e0",
    light: colors.lime["400"],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: "#85B98E",
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.grey[900],
    secondary: secondaryGray,
    link: colors.lime[600],
  },
  background: {
    default: "#F4F6F8",
    paper: white,
    paperHeader: beige,
  },
  icon: colors.lime[500],
  divider: colors.grey[200],
  labelGray: labelGray,
};

export default palette;
