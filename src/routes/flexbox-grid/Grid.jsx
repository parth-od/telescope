import View from "../../components/view";
import classNames from "classnames";
import { Typography } from "@mui/material";

function Grid() {
  return (
    <div className="mt-10">
      <Typography variant="h4" gutterBottom>
        Grid
      </Typography>
      <View
        className={"p-4"}
        style={{
          // width: "800px",
          // height: "400px",
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          gridTemplateColumns: "repeat(3, 1fr)",

          // gridTemplateRows: "1fr minmax(200px, 3fr) 1fr",
          // gridTemplateColumns: "200px minmax(200px, 400px) 200px",

          gridAutoFlow: 'column',
          gridAutoColumns: '1fr',

          gridGap: "10px",

          // gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        <View
          className={classNames("text-blue-900 p-2")}
          style={
            {
              // gridColumnStart: 1,
              // gridColumnEnd: 3,
              // gridRowStart: 1,
              // gridRowEnd: 3,
              // zIndex: 1,
              // gridColumn: '1 / 3',
              // gridRow: '1 / 4',
              // gridArea: '1 / 1 / 4 / 4',
            }
          }
        >
          {1}
        </View>
        <View
          className={classNames("text-blue-900 p-2")}
          style={
            {
              // gridColumnStart: 2,
              // gridColumnEnd: 4,
              // gridRowStart: 1,
              // gridRowEnd: 2,
            }
          }
        >
          {2}
        </View>
        <View
          className={classNames("text-blue-900 p-2")}
          style={
            {
              // gridColumnStart: 2,
              // gridColumnEnd: 4,
              // gridRowStart: 2,
              // gridRowEnd: 4,
            }
          }
        >
          {3}
        </View>
        <View className={classNames("text-blue-900 p-2")}>{4}</View>
        {/* <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View>
        <View className={classNames("text-blue-900 p-2")}>{5}</View> */}
      </View>
    </div>
  );
}

export default Grid;
