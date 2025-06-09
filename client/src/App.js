import React, {useEffect} from "react";
import { Container, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import instaverse from './images/instaverse.png';
import {useDispatch} from 'react-redux'
import { getPosts } from "./actions/posts";

// ✅ New styled components
import { StyledAppBar, StyledHeading, StyledImageWrapper } from './styles';

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">Instaverse</StyledHeading>
        <StyledImageWrapper>
          <img src={instaverse} alt="instaverse" height="60" />
        </StyledImageWrapper>
      </StyledAppBar>
      
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
