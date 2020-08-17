import React from "react";
import { Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./starstyle.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
const fieldName = "score";


const renderStar = isFull => {
  const icon = isFull ? faStar : regularStar;
  return <FontAwesomeIcon className="star" icon={icon} size="lg" />;
};

const Star = ({ isFull, onClick }) => (
  <span className="stars" onClick={onClick}>
    {renderStar(isFull)}
  </span>
);

const Stars = ({ count, handleClick }) => (
  <span className={styles.stars}>
    {[...Array(5).keys()].map(i => (
      <Star key={i} isFull={i < count} onClick={() => handleClick(i + 1)} />
    ))}
  </span>
);

Stars.defaultProps = {
  count: 1,
  handleClick: e => e
};
const StarsInput = () => (
  <Field name={fieldName} id={fieldName} type="number">
    {({ field: { value }, form: { setFieldValue } }) => (
      <div>
        <label htmlFor={fieldName} className="helper-check">
          {`${fieldName}*`}
        </label>
        <div>
          <Stars
            count={value}
            handleClick={number => setFieldValue(fieldName, number)}
          />
        </div>
      </div>
    )}
  </Field>
);

export default StarsInput;
