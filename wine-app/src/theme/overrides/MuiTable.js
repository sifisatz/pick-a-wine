import pallete from "../palette";

const style = {
  styleOverrides: {
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#FBFBFB",
      },
      "& a": {
        color: pallete.primary.main,
      },
    },
  },
};

export default style;
