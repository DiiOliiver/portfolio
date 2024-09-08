import { createTheme, darkScrollbar } from '@mui/material'

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'capitalize',
      fontSize: 14,
    },
    fontFamily: [
      'Rubik',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 14,
    },
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
      styleOverrides: {
        root: {
          minWidth: 118,
          fontSize: 14,
          borderRadius: '6px',
          boxShadow: 'none',
          fontWeight: 400,
        },
        sizeLarge: {
          minHeight: 44,
        },
        outlined: {
          borderWidth: 1,
          ':hover': {
            borderWidth: 1,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            top: -4,
          },
          '& input': {
            padding: '12px',
          },
          '& fieldset': {
            borderWidth: 1,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 400,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderWidth: 1,
        },
        outlinedSuccess: {
          background: '#0C130D',
          color: '#689F20',
        },
        outlinedError: {
          background: '#160B0B',
          color: '#FF5555',
        },
        outlinedWarning: {
          background: '#191207',
          color: '#FFDA27',
        },
        outlinedInfo: {
          color: '#0096AA',
          background: '#071318',
        },
        standardSuccess: {
          background: '#EDF7ED',
          color: '#689F20',
        },
        standardError: {
          background: '#FDEDED',
          color: '#FF5555',
        },
        standardWarning: {
          background: '#FFF9DE',
          color: '#F19A4C',
        },
        standardInfo: {
          color: '#008FFC',
          background: '#E5F6FD',
        },
      },
    },
  },
})

export const themeDark = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    background: {
      default: '#0B0A0A',
      paper: '#3F3F3F',
    },
    primary: {
      main: '#C3014D',
      dark: '#A50034',
    },
    secondary: {
      light: '#666666',
      main: '#2C2C2C',
    },
    success: {
      main: '#52B788',
    },
    warning: {
      main: '#FE6603',
    },
    error: {
      main: '#DE4D53',
    },
    info: {
      main: '#00A8E8',
    },
  },
  components: {
    ...theme.components,
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: darkScrollbar(),
      }),
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          '& > div:not(.MuiBackdrop-invisible)': {
            backdropFilter: 'blur(4px)',
            background: '#0e0d0d57',
            '& .MuiPaper-root': {
              background: '#0B0A0A', // #231F20
              boxShadow: 'none',
              border: '1px solid #272727',
            },
          },
          '& .MuiPaper-root': {
            background: '#000000 !important',
          },
        },
      },
    },
    MuiButton: {
      ...theme.components?.MuiButton,
      styleOverrides: {
        ...theme.components?.MuiButton?.styleOverrides,
        contained: {
          ':disabled': {
            background: '#231F2070',
          },
        },
        outlined: {
          color: '#FFF',
          borderWidth: 1,
          borderColor: 'transparent',
          background: '#231F20',
          ':hover': {
            borderWidth: 1,
          },
          ':disabled': {
            borderColor: '#231F20',
            background: '#231F2070',
            borderWidth: 1,
          },
        },
      },
    },
    MuiTextField: {
      ...theme.components?.MuiTextField,
      styleOverrides: {
        ...theme.components?.MuiTextField?.styleOverrides,
        root: {
          '&:hover input.Mui-disabled': {
            background: 'transparent !important',
            borderRadius: 6,
          },
          '& .MuiInputBase-root': {
            borderRadius: 6,
            background: 'transparent',
          },
          '& label': {
            top: -4,
            '&.MuiFormLabel-filled, &.Mui-focused': {
              top: 0,
              textTransform: 'uppercase',
            },
          },
          '& input': {
            padding: '12px',
          },
          '& fieldset': {
            borderWidth: 1,
            borderColor: '#FFFFFF80',
          },
          '&:hover fieldset': {
            borderColor: '#FFFFFF !important',
          },
          '&:hover .MuiInputBase-root': {
            background: 'transparent',
          },
          '&:hover input': {
            background: 'transparent',
          },
          '& .MuiInputBase-colorSuccess': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#71D197',
            },
            '&:hover fieldset': {
              borderColor: '#71D197 !important',
            },
            '& input': {
              background: 'transparent',
            },
          },
          '& .MuiInputBase-colorError': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#DE4D53',
            },
            '&:hover fieldset': {
              borderColor: '#DE4D53 !important',
            },
            '& input': {
              background: 'transparent',
            },
          },
          '& .Mui-disabled': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#FFFFFF80',
            },
            '&:hover fieldset': {
              borderColor: '#FFFFFF80 !important',
            },
            '&:hover input': {
              background: 'inherit',
            },
          },
          '&:hover .Mui-disabled': {
            background: 'transparent',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          '& fieldset': {
            borderWidth: 1,
            borderColor: '#FFFFFF80',
          },
          '&:hover fieldset': {
            borderColor: '#FFFFFF !important',
          },
          '&:hover .MuiSelect-select': {
            background: '#2C2C2C',
            borderColor: '#231F20',
          },
          '&:hover input': {
            background: 'transparent',
          },
          '&.MuiInputBase-root:hover ': {
            background: '#2C2C2C',
            borderColor: '#231F20',
          },
          '&.Mui-error': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#DE4D53',
            },
            '&:hover fieldset': {
              borderColor: '#DE4D53 !important',
            },
          },
          '&.Mui-disabled': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#555567',
            },
            '&:hover fieldset': {
              borderColor: '#555567 !important',
            },
            '&:hover input': {
              background: 'inherit',
            },
          },
          '&.Mui-disabled .MuiSelect-select': {
            background: 'inherit',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px',
          background: 'transparent',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {
            border: '2px solid #e0e0e0',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: '#2C2C2C',
        },
        tooltip: {
          background: '#2C2C2C',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#231F2085',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            background: '#231F20',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          background: '#201D1D',
          '&.MuiChip-colorError': {
            background: '#2B0D17',
            color: '#FFAEC9',
          },
          '&.MuiChip-colorError.MuiChip-outlined': {
            background: '#160B10',
            borderColor: '#C3014D',
            color: '#FFD6E6',
          },
          '&.MuiChip-colorSuccess': {
            background: '#0C130D',
            color: '#CCE8CD',
          },
          '&.MuiChip-colorSuccess.MuiChip-outlined': {
            background: '#0C130D',
            borderColor: '#689F20',
            color: '#CCE8CD',
          },
          '&.MuiChip-colorWarning': {
            background: '#0C130D',
            color: '#FBFBDC',
          },
          '&.MuiChip-colorWarning.MuiChip-outlined': {
            background: '#191207',
            borderColor: '#FFDA27',
            color: '#FBFBDC',
          },
          '&.MuiChip-colorInfo': {
            background: '#0C130D',
            color: '#B8E7FB',
          },
          '&.MuiChip-colorInfo.MuiChip-outlined': {
            background: '#071318',
            borderColor: '#0096AA',
            color: '#B8E7FB',
          },
        },
        outlinedPrimary: {
          background: '#160B10',
          borderColor: '#C3014D',
          color: '#FFD6E6',
        },
        outlinedSecondary: {
          background: '#302C2C',
          borderColor: '#8D8D8D',
          color: '#FDEDED',
        },
      },
    },
  },
})

export const themeLight = createTheme({
  ...theme,
  palette: {
    mode: 'light',
    background: {
      default: '#F3F5F7',
    },
    primary: {
      main: '#C3014D',
      dark: '#A50034',
    },
    secondary: {
      light: '#EAEBEA',
      main: '#b6b9b6',
    },
    success: {
      main: '#71D197',
    },
    warning: {
      main: '#F19A4C',
    },
    error: {
      main: '#DE4D53',
    },
    info: {
      main: '#F777BD',
    },
  },
  components: {
    ...theme.components,
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: darkScrollbar(),
      }),
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          '& > div:not(.MuiBackdrop-invisible)': {
            backdropFilter: 'blur(4px)',
            background: '#55555524',
            '& .MuiPaper-root': {
              background: '#F3F5F7',
              boxShadow: 'none',
              border: '1px solid #b6b9b6',
            },
            '&.MuiPaper-root': {
              background: '#EAEBEA',
            },
          },
          '& .MuiPaper-root': {
            background: '#EAEBEA',
          },
        },
      },
    },
    MuiButton: {
      ...theme.components?.MuiButton,
      styleOverrides: {
        ...theme.components?.MuiButton?.styleOverrides,
        contained: {},
        outlined: {
          borderWidth: 1,
          ':hover': {
            borderWidth: 1,
          },
          ':disabled': {
            borderColor: '#E0E1E0',
            background: '#E0E1E070',
            borderWidth: 1,
          },
        },
      },
    },
    MuiTextField: {
      ...theme.components?.MuiTextField,
      styleOverrides: {
        ...theme.components?.MuiTextField?.styleOverrides,
        root: {
          '&:hover input.Mui-disabled': {
            background: 'transparent !important',
          },
          '& .MuiInputBase-root': {
            borderRadius: 6,
            background: '#F3F5F7',
            border: '1px solid #EAEBEA',
          },
          '& label': {
            top: -4,
            '&.MuiFormLabel-filled, &.Mui-focused': {
              top: 0,
              textTransform: 'uppercase',
            },
          },
          '& input': {
            padding: '12px',
          },
          '& fieldset': {
            borderWidth: 1,
            borderColor: '#C3014D',
          },
          '&:hover fieldset': {
            borderColor: '#C3014D !important',
          },
          '&:hover .MuiInputBase-root': {
            background: '#EAEBEA',
          },
          '&:hover input': {
            background: 'transparent',
          },
          '& .MuiInputBase-colorSuccess': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#71D197',
            },
            '&:hover fieldset': {
              borderColor: '#71D197 !important',
            },
            '& input': {
              background: 'transparent',
            },
          },
          '& .MuiInputBase-colorError': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#DE4D53',
            },
            '&:hover fieldset': {
              borderColor: '#DE4D53 !important',
            },
            '& input': {
              background: 'transparent',
            },
          },
          '& .Mui-disabled': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#555567',
            },
            '&:hover fieldset': {
              borderColor: '#555567 !important',
            },
            '&:hover input': {
              background: 'inherit',
            },
          },
          '&:hover .Mui-disabled': {
            background: 'transparent',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          '& fieldset': {
            borderWidth: 1,
            borderColor: '#C3014D',
          },
          '&:hover fieldset': {
            borderColor: '#C3014D !important',
          },
          '&:hover input': {
            background: 'transparent',
          },
          '&.Mui-error': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#DE4D53',
            },
            '&:hover fieldset': {
              borderColor: '#DE4D53 !important',
            },
          },
          '&.Mui-disabled': {
            '& fieldset': {
              borderWidth: 1,
              borderColor: '#555567',
            },
            '&:hover fieldset': {
              borderColor: '#555567 !important',
            },
            '&:hover input': {
              background: 'inherit',
            },
          },
          '&.Mui-disabled .MuiSelect-select': {
            background: 'inherit',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px',
          border: '1px solid #EAEBEA',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {
            border: '2px solid #e0e0e0',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: '#999999',
        },
        tooltip: {
          background: '#999999',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#eaeaea85',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            background: '#231F20',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingLeft: 8,
          position: 'relative',
          '&::before': {
            position: 'absolute',
            left: 8,
            content: '""',
            width: 6,
            height: 6,
            borderRadius: 6,
            background: '#FFF',
          },

          '&.MuiChip-colorError.MuiChip-outlined': {
            background: '#FFF2F9',
            '&::before': {
              background: '#DE4D53',
            },
          },

          '&.MuiChip-colorWarning.MuiChip-outlined': {
            background: '#FFF9DE',
            '&::before': {
              background: '#F19A4C',
            },
          },

          '&.MuiChip-colorSuccess.MuiChip-outlined': {
            background: '#EBF9F1',
            '&::before': {
              background: '#3EB46D',
            },
          },
        },
        outlinedPrimary: {
          background: '#F4F2FF',
          '&::before': {
            background: '#C3014D',
          },
        },
      },
    },
  },
})
