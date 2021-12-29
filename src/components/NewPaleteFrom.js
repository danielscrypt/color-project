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
import TextField from '@material-ui/core/TextField';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
// import { blue } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { arrayMove } from 'react-sortable-hoc';




import { HexColorPicker } from "react-colorful";
import DragableColorBox from './DragableColorBox.js';
import DragableColorList from './DragableColorList.js';


export default function NewPaleteForm(props) {
    const classes = useStyles();
    // const theme = useTheme();
    const [open, setOpenDrawer] = useState(false);
    const [color, setColor] = useState('#333');
    const [colors , setColors] = useState([]);
    const [colorName , setName] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [nameVali , setVali] = useState(false)




    const handleClickOpen = () => {
      setOpenDialog(true);
    };
  
    const handleClose = (value) => {
      setOpenDialog(false);
    };
  
    const handleDrawerOpen = () => {
      setOpenDrawer(true);
    };
  
    const handleDrawerClose = () => {
      setOpenDrawer(false);
    };

    const addColor = (newColor) => {
      const newCol = {
        id: uuidv4() , 
        color: newColor,
        name: colorName
      };
      if(colorName <= 0){
        setVali(true)
      } else {
        setColors([...colors , newCol])
        setName('')
        setVali(false)
      }
    }

    const handleChange = (evt) =>  {
      setName(evt.target.value);
    }

     const handleSubmit = (name) => {
      let newName = name;
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

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function randomName() {
      const names = ["Harry","Ross",
      "Bruce","Cook",
      "Carolyn","Morgan",
      "Albert","Walker",
      "Randy","Reed",
      "Larry","Barnes",
      "Lois","Wilson",
      "Jesse","Campbell",
      "Ernest","Rogers",
      "Theresa","Patterson",
      "Henry","Simmons",
      "Michelle","Perry",
      "Frank","Butler",
      "Shirley"]

      const random = Math.floor(Math.random() * names.length)
      
      return names[random]
    }

    const randColor = () => {
      setColors([...colors , {id: uuidv4() ,  name : randomName() , color:  getRandomColor()}])
    }

    const clearColors = () => {
      setColors([])
    }

    const onSortEnd = (oldIndex, newIndex) => {
      setColors(arrayMove(colors, oldIndex, newIndex));
      console.log(oldIndex)
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

            <Button 
            className='btn' 
            variant='contained' 
            color='primary'>
              <a href='/' style={{textDecoration: 'none' , color: '#fff'}}>go back</a>
            </Button>

            <Button 
            id='btn'
            onClick={handleClickOpen} 
            variant='contained' 
            color='secondary'>
              save
            </Button>
            </div>
          </Toolbar>
        </AppBar>
        <SimpleDialog
        open={openDialog}
        onClose={handleClose}
        handleSubmit={handleSubmit}
      />

        
        
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
            <Button
            onClick={clearColors} 
            id='btn' 
            variant='contained' 
            color='secondary'>
              Clear Palette
            </Button>
            <Button
            disabled={colors.length === 20}
            onClick={randColor} 
            id='btn' 
            variant='contained' 
            color='primary'>
              Random Color
            </Button>
            </div>
            <HexColorPicker color={color} onChange={setColor} />
           {/* < FormControl > */}
          <TextField 
          error={nameVali}
          helperText={nameVali ? 'Please ente name...' : ''}
          value={colorName}
           onChange={handleChange}
           id="outlined-search"
           label="Color Name"
           type="text" />
        
           <Button 
           id='btn'
           disabled={colors.length === 20}
           onClick={() => addColor(color)}
           variant='contained' 
           color='secondary' 
           style={{backgroundColor : color}}>
              {colors.length === 20 ? 'Pallete IS Full' : `Add Color ${color}` }
            </Button>
      {/* </FormControl> */}
        
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <DragableColorList 
          axis='xy'
          colors={colors}
          handleDelete={handleDelete}
          onSortEnd={onSortEnd}
          />

          


         
        </main>
      </div>
    );
  }


  function SimpleDialog(props) {
    const { onClose, selectedValue, open , handleSubmit } = props;
    const [palleteName , setPalleteName] = useState('') 
  
    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleChange = (e) => {
      setPalleteName(e.target.value)
    }
  
    
    return (
      <section id="Dialog">
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Select Pallete Name</DialogTitle>
        <TextField 
        onChange={handleChange}
        id="outlined-basic" 
        label="PalleteName" 
        variant="outlined" />
  
        <Button 
              id='btn'
              variant='contained' 
              color='secondary'
              onClick={() => handleSubmit(palleteName)}>
                save
              </Button>
        
      </Dialog>
      </section>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };