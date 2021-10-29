import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: 25,
            },
          },
    },
    appBarContainer:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#FEFEFE',

    },
    appBarSection:{
        padding:'0px 145px',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'

    },
    actionButtons:{
        width:'500px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    search:{
        paddingLeft:'30px',
        width:'300px'
    }

  })
);
