import { createTheme } from '@mui/material';


const landingDefaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
          textTransform: 'capitalize',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-root:hover': {
            backgroundColor: '#BA291C',
            transition: 'background-color 1s ease-out',
            color: '#fff',
          },
          clickable: {
            '&.MuiChip-clickable': {
              backgroundColor: '#BA291C',
            },
            '&.MuiChip-clickable:hover': {
              backgroundColor: '#BA291C',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#BA291C',
          fontFamily: 'Kanit, sans-serif',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '30px',
          width: '100%',
          backgroundColor: '#FFF',
          // border: '1px solid #BA291C',
          '&.Mui-focused': {
            border: '1px solid #BA291C',
            color: '#BA291C',
            // borderColor: '#BA291C',
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              // border: '1px solid #BA291C',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid #BA291C',
            },
          },
          legend: {
            display: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#BA291C',
            border: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '30px',
          fontFamily: 'Kanit, sans-serif',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.MuiSelect-icon': {
            color: '#BA291C',
            width: '28px',
            height: '28px',
          },
        },
      },
    },
  },
});

export default landingDefaultTheme;
