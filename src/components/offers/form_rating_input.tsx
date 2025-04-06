type RatingValue = { value: number; setRating: (value: number) => void };
function FormRatingInput({ value, setRating }: RatingValue): JSX.Element {
  return (
    <input onChange={() => setRating(value)} className="form__rating-input visually-hidden" name="rating" value={value} id="{value}-stars" type="radio" />
  );
}
export default FormRatingInput;
