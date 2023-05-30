import * as Yup from 'yup';
import PizzaFields from './PizzaFields';
import SoupFields from './SoupFields';
import SandwichFields from './SandwichFields';

export type DishType = 'pizza' | 'soup' | 'sandwich';

export interface FormValues {
  name: string;
  preparation_time: string;
  type: DishType;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}

export const initialValues: FormValues = {
  name: '',
  preparation_time: '',
  type: 'pizza',
};

export const dishComponents = {
  pizza: PizzaFields,
  soup: SoupFields,
  sandwich: SandwichFields,
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  preparation_time: Yup.string().required('Required'),
  type: Yup.string().required('Required'),
  no_of_slices: validateIfFieldRequired('pizza', 'Pole no_of_slices jest wymagane'),
  diameter: validateIfFieldRequired('pizza', 'Pole diameter jest wymagane'),
  spiciness_scale: validateIfFieldRequired('soup', 'Pole spiciness_scale jest wymagane'),
  slices_of_bread: validateIfFieldRequired('sandwich', 'Pole slices_of_bread jest wymagane'),
});

function validateIfFieldRequired(fieldName: string, errorMessage: string) {
  return Yup.number().test(`is-${fieldName}`, errorMessage, (value, context) => {
    const type = context.parent.type;
    if (type === fieldName) {
      return !!value;
    }
    return true;
  });
}