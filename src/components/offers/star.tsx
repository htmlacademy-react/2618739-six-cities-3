type StarProps = {
    for_star: string;
    title_star: string;

}
function Star(star_props: StarProps): JSX.Element {
    return (<label htmlFor={star_props.for_star} className="reviews__rating-label form__rating-label" title={star_props.title_star}>
        <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
        </svg>
    </label>

    );
}
export default Star;
