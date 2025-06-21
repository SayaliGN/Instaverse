import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardActions, Typography } from '@mui/material';

// Styled Card container
export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}));

export const StyledMedia = styled('div')(({ image }) => ({
  height: 0,
  paddingTop: '56.25%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}));



export const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
}));

export const Overlay2 = styled('div')(() => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
}));

export const GridBox = styled('div')(() => ({
  display: 'flex',
}));

export const Details = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
}));

export const Title = styled(Typography)(() => ({
  padding: '0 16px',
}));

export const StyledCardActions = styled(CardActions)(() => ({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledHeading = styled('h1')(({ theme }) => ({
  color: '#55133B',
  fontWeight: 500,
  textAlign: 'center',
  margin: theme.spacing(2),
}));