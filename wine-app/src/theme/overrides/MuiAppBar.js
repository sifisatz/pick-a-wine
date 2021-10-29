import palette from "../palette";

const style = {
  styleOverrides: {
    root: {
      boxShadow: "none",
      backgroundColor: "white !important",
      "& .MuiTypography-h5": {
        color: palette.text.secondary,
      },
    },
    colorPrimary: {
      color: palette.text.secondary,
    },
  },
};

export default style;
