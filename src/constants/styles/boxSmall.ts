// export const boxSmallStyles = {
//   flexGrow: 1,
//   display: "none",
//   justifyContent: "space-between",
//   "@media (max-width: 1300px)": {
//     display: "flex"
//   },

// };
export const boxSmallStyles = {
  flexGrow: 1,
  display: "none",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width: 1000px)": {
    display: "flex",
    justifyContent: "space-between",
  },
};
export const boxSmallHomeStyles = {
  flexGrow: 1,
  display: "none",
  // display: { xs: "flex", md: "none" },
  justifyContent: "space-between",
  border: "1px solid tomato",
  "@media (max-width: 700px)": {
    display: "flex"
  },
};
