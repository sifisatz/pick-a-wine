const style = {
  styleOverrides: {
    root: {
      minWidth: "0px !important",
      color: "#484848",
      fontSize: "14px",
      fontWeight: 600,
      backgroundColor: "#FFF",
      marginRight: "8px",
      textTransform: "none",
      padding: "10px 20px",
      "&:last-child": {
        marginRight: "0px",
      },
      "&.Mui-selected": {
        borderBottom: "none",
        color: "#3A84FF",
      },
      borderBottom: "2px solid #E9E9E9",
    },
  },
};

export default style;
