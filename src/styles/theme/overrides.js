const overrides = {
  MuiLinearProgress: {
    root: {
      borderRadius: 3,
      overflow: 'hidden'
    }
  },
  MuiListItemIcon: {
    root: {
      minWidth: 32
    }
  },

  MuiCard: {
    root: {
      borderRadius: '6px',
      boxShadow: '0 0 2px 0 rgb(0 0 0 / 15%), 0 8px 16px -4px rgb(0 0 0 / 8%)'
    }
  },
  MuiPaper: {
    root: {
      boxShadow: '0 0 2px 0 rgb(0 0 0 / 15%), 0 8px 16px -4px rgb(0 0 0 / 8%)'
      // boxShadow: '0px 0.5px 4px rgba(0, 0, 0, 0.25)'
    }
  },

  MuiAccordion: {
    root: {
      boxShadow:
        '0 0 2px 0 rgb(0 0 0 / 15%), 0 8px 16px -4px rgb(0 0 0 / 8%) !important'
    }
  },
  MuiAccordionDetails: {
    root: { padding: '0 16px 16px' }
  },
  MuiFormLabel: {
    root: {
      fontSize: '16px'
    }
  },
  MuiCardHeader: {
    action: {
      marginTop: '-4px',
      marginRight: '-4px'
    }
  },
  MuiPickersDay: {
    day: {
      fontWeight: '300'
    }
  },
  MuiPickersYear: {
    root: {
      height: '64px'
    }
  },
  MuiPickersCalendar: {
    transitionContainer: {
      marginTop: '6px'
    }
  },
  MuiPickersCalendarHeader: {
    iconButton: {
      backgroundColor: 'transparent',
      '& > *': {
        backgroundColor: 'transparent'
      }
    },
    switchHeader: {
      marginTop: '2px',
      marginBottom: '4px'
    }
  },
  MuiPickersClock: {
    container: {
      margin: `32px 0 4px`
    }
  },
  MuiPickersClockNumber: {
    clockNumber: {
      left: `calc(50% - 16px)`,
      width: '32px',
      height: '32px'
    }
  },
  MuiPickerDTHeader: {
    dateHeader: {
      '& h4': {
        fontSize: '2.125rem',
        fontWeight: 400
      }
    },
    timeHeader: {
      '& h3': {
        fontSize: '3rem',
        fontWeight: 400
      }
    }
  },
  MuiPickersTimePicker: {
    hourMinuteLabel: {
      '& h2': {
        fontSize: '3.75rem',
        fontWeight: 300
      }
    }
  },
  MuiPickersToolbar: {
    toolbar: {
      '& h4': {
        fontSize: '2.125rem',
        fontWeight: 400
      }
    }
  },
  MuiChip: {
    root: {
      borderRadius: '6px',
      backgroundColor: 'rgba(0,0,0,0.075)'
    }
  },
  MuiButton: {
    root: {
      fontWeight: 700
    }
  },
  MuiTableCell: {
    body: {
      padding: '8px 8px'
    },
    head: {
      padding: '16px 8px',
      fontWeight: 700
    }
  }
};

export default overrides;
