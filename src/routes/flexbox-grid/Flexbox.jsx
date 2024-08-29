import { Typography } from "@mui/material";
import View from "../../components/view";
import classNames from "classnames";

function Flexbox() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Flexbox
      </Typography>
      <View
        className={"p-4 flex flex-row flex-wrap content-start gap-2"}
        style={{ height: "400px", width: 400 }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            className={classNames(
              "text-blue-900 p-2 flex items-center justify-center",
              {
                "bg-blue-200": index % 2 === 0,
                "bg-blue-300": index % 2 !== 0,
                // 'self-start': index === 0,
                // "flex-grow": index === 2 || index === 3,
                "flex-shrink-0": index === 2,
              }
            )}
            style={{ height: "100px", width: "100px" }}
            // style={{ flexGrow: index === 2 ? 4 : 1 }}
            // style={{ flexShrink: index === 2 ? 2 : 1 }}
          >
            {index + 1}
          </View>
        ))}
      </View>
    </div>
  );
}

export default Flexbox;
