import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  message: string;
  children?: React.ReactNode;
}
export const CajaDetailPlaceHolder: FC<Props> = ({ message }) => {
  return (
    <Grid
      height="100%"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      item
      xs={11}
    >
      <Grid item>
        <LocalAtmIcon sx={{ fontSize: 100, color: '#EAEAEA' }} />
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          component={'div'}
          sx={{ textAlign: 'center', width: 300, color: '#CBCBCB' }}
        >
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};
