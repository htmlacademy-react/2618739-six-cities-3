type RatingValue = { value: number };
function FormRatingInput({ value }: RatingValue): JSX.Element {
  return (
    <input className="form__rating-input visually-hidden" name="rating" value={value} id="{value}-stars" type="radio"/>
  );
}
export default FormRatingInput;
