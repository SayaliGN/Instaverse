import { styled } from "@mui/material/styles";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Styled Components
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#efefef',
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  color: '#55133B',
  fontWeight: 400,
  textTransform: 'lowercase',
}));

export const StyledImageWrapper = styled(Box)(({ theme }) => ({
  marginLeft: '15px',
}));
