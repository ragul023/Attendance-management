import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Button variant="contained" color="primary">
        Hello MUI
      </Button>

      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        style={{ marginLeft: 10 }}
      >
        Delete
      </Button>
    </div>
  );
}

export default App;
