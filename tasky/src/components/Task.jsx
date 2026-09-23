import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import Chip from "@mui/material/Chip";

const Task = (props) => {
  return (
    <Grid key={props.id} size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          backgroundColor: props.done ? "#ECEFF1" : "#FFFFFF",
          padding: "20px",
          boxShadow: 3,
          borderRadius: "8px",
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: "#3F51B5",
            color: "#FFFFFF",
            borderRadius: "5px",
            padding: "20px",
            textAlign: "center",
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
              padding: "20px",
            }}
          >
            <Chip
              label={`Due: ${props.deadline}`}
              sx={{
                backgroundColor:
                  props.deadline === "Today" ? "#D32F2F" : "#ED6C02",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
              variant="filled"
              size="small"
            />
          </Box>

          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{ fontStyle: "italic", color: "#5F6368" }}
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#2E7D32" }}
            onClick={props.markDone}
          >
            Done
            <DoneIcon />
          </Button>

          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#D32F2F" }}
            onClick={props.deleteTask}
          >
            Delete
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Task;
