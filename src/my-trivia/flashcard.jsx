import classNames from "classnames";

export const FLASHCARD_AREA = Object.freeze({
  CENTER: "center",
  LEFT: "left",
  RIGHT: "right",
});

export const Flashcard = ({
  question,
  answer,
  flipped = false,
  getHandleOnClick = () => {},
}) => {
  return (
    <div>
      <div>
        <p>{question}</p>
        {flipped ? <p>{answer}</p> : null}
      </div>
    </div>
  );
};
