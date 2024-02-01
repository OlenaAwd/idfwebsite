export const buyModalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "640px",
    height:"812px",
    bgcolor: "#fff",
    outline: "none",
    padding: "60px",
    cursor: "pointer",
    borderRadius: "16px",
    "@media (max-width: 680px)": {
        width: 500,
        padding: "40px",
        overflow: "auto",
        height:"600px"
    },
    "@media (max-width: 530px)": {
        width: 420,
        padding:"20px",
    },

}