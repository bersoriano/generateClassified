import React from 'react';
import Modal from '@material-ui/core/Modal';
import useStyles from './useStyles';
import getModalStyle from './getModalStyles';
import BasicTextFields from '../Input'
import MultilineTextFields from '../TextArea';
import MaterialUIPicker from '../DatePicker';
import RadioButtonsGroup from '../Radio';
import Checkbox from '../Checkbox';
import SimpleSelect from '../Select';
import ContinuousSlider from '../Slider'

export default function CustomModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open,setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    } 
    const handleClose = () => {
        setOpen(false);
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Classified generator</h2>
        <BasicTextFields></BasicTextFields>
        <MultilineTextFields></MultilineTextFields>
        <MaterialUIPicker></MaterialUIPicker>
        <RadioButtonsGroup></RadioButtonsGroup>
        <Checkbox></Checkbox>
        <SimpleSelect></SimpleSelect>
        <ContinuousSlider></ContinuousSlider>
      </div>        
    );
    return (
        <div>
            <button type="button" onClick={handleOpen}>Step One</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{display: 'flex', alignItems:'center', justifyContent:'center'}}
                >{body}
            </Modal>
        </div>        
    );
}