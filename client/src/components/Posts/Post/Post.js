import React from "react";
import moment from "moment";
import {
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Styled components import
import {
  StyledCard,
  StyledMedia,
  Overlay,
  Overlay2,
  Details,
  Title,
  StyledCardActions,
} from "./styles";

const Post = ({ post }) => {
  
  return (
    <StyledCard>
    
      <StyledMedia image={post.selectedFile} title={post.title} />
      
      
      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Overlay>

      <Overlay2>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </Overlay2>

      <Details>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Details>

      <Title variant="h5" gutterBottom>
        {post.title}
      </Title>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>

      <StyledCardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
