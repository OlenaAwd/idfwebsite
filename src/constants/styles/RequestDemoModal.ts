export const requestModalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "640px",
    // height: "683px",
    bgcolor: "#fff",
    outline: "none",
    padding: "60px",
    cursor: "pointer",
    borderRadius: "16px",
    "@media (max-width: 820px)": {
        width: 700,
    },
    "@media (max-width: 720px)": {
        width: 600,
        padding:"40px 20px",
    },
    "@media (max-width: 650px)": {
        width: 500,
        padding: "60px",
    },

    "@media (max-width: 530px)": {
        width: 358,
         padding:"16px",
    },
}

export const participantModalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '1160px',
    maxHeight: '850px',
    bgcolor: 'background.paper',
    border: '1px solid #cecece',
    boxShadow: 24,
    padding: '24px 40px',
    borderRadius: '20px',
    outline: "none",
    cursor: "pointer",
    overflow: "hidden",
    "@media (max-width: 1120px)": {
        width: 700,
    },
    "@media (max-width: 720px)": {
        width: 600,
    },
    "@media (max-width: 650px)": {
        width: 500,
    },
    "@media (max-width: 460px)": {
        width: 420,
    },
}