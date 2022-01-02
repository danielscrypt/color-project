import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 400;


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth ,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      display: 'flex' , 
      alignItems: 'center',
      "@media (max-width: 800px)": {
        width: drawerWidth  , 
        fontSize: '0.5rem' , 
        flexDirection: 'coloumn'
      }
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: `calc(100vh - 64px)` , 
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    colorBox: {
      height: '25%',
      width: '20%',
      position:' relative',
      cursor:' pointer',
      display: 'inline-block',
      margin: '-3px auto',
      textTransform: 'uppercase',
      fontFamily: 'Neucha, cursive',
      
  },
  }));

  export default useStyles