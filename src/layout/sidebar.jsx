import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const Routes = [
  {
    path: "/suspense",
    title: "Suspense",
  },
];

export default function NestedList() {
  const navigate = useNavigate();

  return (
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {Routes.map((route, index) => {
          return (
            <ListItemButton key={index} onClick={() => navigate(route.path)}>
              <ListItemText
                primary={route.title}
                style={{ color: "#007FFF" }}
              />
            </ListItemButton>
          );
        })}
      </List>
  );
}
