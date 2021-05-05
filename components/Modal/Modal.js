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
import ContinuousSlider from '../Slider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function CustomModal(props) {
    console.log(">>Props", props)
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
        <h2 id="simple-modal-title">{props.modalConfig.flowName}</h2>
        {props.modalConfig.config.shortDescription && <BasicTextFields title={props.modalConfig.shortDescription}></BasicTextFields> }
        {props.modalConfig.config.longDescription && <MultilineTextFields shortDescription={props.modalConfig.shortDescription}></MultilineTextFields>}
        {props.modalConfig.config.date && <MaterialUIPicker></MaterialUIPicker>}
        {props.modalConfig.config.options && <RadioButtonsGroup></RadioButtonsGroup>}
        {props.modalConfig.config.checkbox && <Checkbox></Checkbox>}        
        {props.modalConfig.config.selection && <SimpleSelect></SimpleSelect>}        
        {props.modalConfig.config.slider && <ContinuousSlider></ContinuousSlider>}  
        {props.modalConfig.config.publish && <Button variant="contained" color="primary">Submit</Button>}                        
      </div>        
    );
    return (
        <div>
            <Button className="std-btn" style={{margin: '1rem'}} variant="contained" color="primary" type="button" onClick={handleOpen}>{props.modalConfig.flowName}</Button>
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