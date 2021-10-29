import palette from "../palette";

const style = {
  styleOverrides: {
    root: {
      opacity: "0.7",
      color: palette.labelGray,
      fontSize: "14px",
      fontWeight: "600",
      letterSpacing: "0.37px",
      lineHeight: "16px",
      "&:not(.MuiInputLabel-formControl)": {
        opacity: "0.7",
        color: palette.labelGray,
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "0.37px",
        lineHeight: "16px",
      },
      "&.MuiInputLabel-shrink": {
        opacity: "0.7",
        color: palette.labelGray,
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.37px",
        lineHeight: "16px",
        transform: "translate(0, -7px) scale(1)",
      },
    },
  },
};

export default style;
