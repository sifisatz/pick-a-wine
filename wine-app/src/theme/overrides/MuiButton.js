const style = {
  styleOverrides: {
    root: {
      boxShadow: "none!important",
      padding: "5px 30px",
      textTransform: "none",
      fontSize: "16px",
      fontWeight: "500",
      letterSpacing: "0",
      lineHeight: "24px",
    },
    textSizeSmall: {
      padding: "5px 10px",
      "& span": {
        fontSize: "14px",
      },
    },
    containedSizeSmall: {
      padding: "4px 10px",
    },
  },
};

export default style;
