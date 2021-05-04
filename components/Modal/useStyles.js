import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },  
    paper: {
      position: 'absolute',
      width: '50vw',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid silver',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '1rem'    
    }   
  }));
export default useStyles;