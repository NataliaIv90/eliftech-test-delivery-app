import { Typography } from '@mui/material';
import { CartFormWrapper, FormItem, StyledTextField } from './CartForm.styled';

const formFieldsData = [
  {
    name: 'Name',
    type: 'text',
    id: 'name'
  },
  {
    name: 'Email',
    type: 'email',
    id: 'email'
  },
  {
    name: 'Phone',
    type: 'text',
    id: 'phone'
  },
  {
    name: 'Adress',
    type: 'text',
    id: 'adress'
  }
]

export const CartForm = ({ formValues, setFormValues }) => {
  // const [formValues, setFormValues] = useState(
  //   {
  //     'name': '',
  //     'email': '',
  //     'phone': '',
  //     'adress': '',
  //   }
  // );
  return (
    <CartFormWrapper>
      <Typography type='h1' variant='h4' align='center' >Delivery info</Typography>

      {formFieldsData.map((el) => (
        <FormItem key={el.id}>
          <StyledTextField
            required
            label={el.id}
            id="outlined-size-small"
            size="medium"
            value={formValues[el.id]}
            onChange={(event) => {
              setFormValues({ ...formValues, [el.id]: event.target.value });
            }}
          />
        </FormItem>
      ))}
    </CartFormWrapper>
  )
}