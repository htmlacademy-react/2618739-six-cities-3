type RatingValue = { value: number };
function FormRatingInput({ value }: RatingValue): JSX.Element {
  const id = `${value.toString()}-stars`;
  return (
    <input data-testid={`${value}-formRating`} className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio" />
  );
}
export default FormRatingInput;
