import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F5B223',
      '100': '#FEEFC3',
    },
    secondary: {
      main: '#3A64D8',
    },
    success: {
      main: '#59AF25',
      '100': '#CEF5B6',
    },
    error: {
      main: '#E83035',
      '100': '#FCE3E3',
    },
    info: {
      main: '#fff',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60,
        },
      },
    },

    // MuiTypography: {
    //   styleOverrides: {
    //     h1: {
    //       fontSize: 30,
    //       fontWeight: 600,
    //     },
    //     h2: {
    //       fontSize: 20,
    //       fontWeight: 400,
    //     },
    //     subtitle1: {
    //       fontSize: 18,
    //       fontWeight: 600,
    //     },
    //     h5: {
    //       fontSize: '1.5625rem',
    //       [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
    //         fontSize: '0.6785rem',
    //       },
    //     },
    //   },
    // },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          color: '#fff',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          ':hover': {
            color: '#000000',
            backgroundColor: '#FEEFC3',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        },
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
