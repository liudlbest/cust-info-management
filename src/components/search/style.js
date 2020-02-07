import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom : 20,
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: 200,
      },
    },
  }),
);