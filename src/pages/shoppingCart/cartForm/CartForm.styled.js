import { styled, TextField } from "@mui/material";

export const CartFormWrapper = styled('form')({
  gridArea: 'form',
  width: '100%',
  padding: '25px 15px',
});

export const FormItem = styled('div')({
  margin: '35px 0',
  padding: 0,
  width: '100%',
});

export const StyledTextField = styled(TextField)({
  width: '100%',
});