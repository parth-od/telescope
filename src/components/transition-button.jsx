/* eslint-disable react/prop-types */
import { Button, CircularProgress } from "@mui/material";
import { useTransition } from "react";

function TransitionButton({ onClick, children, ...rest }) {
  const [isPending, startTransition] = useTransition();
  const onClickHandler = () => {
    startTransition(() => {
      onClick();
    });
  };

  return (
    <Button
      startIcon={isPending && <CircularProgress size={20} />}
      onClick={onClickHandler}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default TransitionButton;
