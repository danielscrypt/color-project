import React , {useState}  from'react'
import { v4 as uuidv4 } from 'uuid';
import useStyles from './styles/NewFormStyles.js'
import './styles/ColorBox.css'
import './styles/NewFormStyle.css'
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
// import { FormControl } from '@material-ui/core';



import { HexColorPicker } from "react-colorful";
import DragableColorBox from './DragableColorBox.js';



export default function NewPaleteForm(props) {
    const classes = useStyles();
    // const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('#333');
    const [colors , setColors] = useState([]);


  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const addColor = (newColor) => {
        setColors([...colors , {id: uuidv4() ,  name : 'hey', color: newColor}])
    }

     const handleSubmit = () => {
      let newName = "New Test Palette";
      const newPalette = {
        paletteName: newName,
        id: newName.toLowerCase().replace(/ /g, "-"),
        colors: colors
      };
      props.savePalette(newPalette);
      props.history.push("/");
    }

    const handleDelete = (colorId) => {
      setColors(colors.filter(color => color.id !== colorId))
    }

    
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className='toolbar'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              create pallete
            </Typography>
            <div>
            <Button className='btn' variant='contained' color='primary'>
              <a href='/' style={{textDecoration: 'none' , color: '#fff'}}>go back</a>
            </Button>
            <Button id='btn'
            onClick={handleSubmit} 
            variant='contained' 
            color='secondary'>
              save
            </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon /> 
            </IconButton>
          </div>
          <Divider />

           <Typography className='designHeader' variant='h4'>Design Your Palette</Typography>
          <div>
            <Button id='btn' variant='contained' color='secondary'>
              Clear Palette
            </Button>
            <Button id='btn' variant='contained' color='primary'>
              Random Color
            </Button>
            </div>
            <HexColorPicker color={color} onChange={setColor} />
           {/* < FormControl > */}
          {/* <TextField 
          error
           id="outlined-search"
           label="Color Name"
           type="text" /> */}
        
           <Button id='btn'
           disabled={colors.length === 20}
           onClick={() => addColor(color)}
           variant='contained' 
           color='secondary' 
           style={{backgroundColor : color}}>
              Add Color {color}
            </Button>
      {/* </FormControl> */}
        
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          {colors.map(color => (
            <DragableColorBox  handleDelete={() => handleDelete(color.id)} bg={color.color} />
          ))}

          


         
        </main>
      </div>
    );
  }