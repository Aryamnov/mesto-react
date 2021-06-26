import Success from "../images/Success.svg";
import Error from "../images/Error.svg";

function InfoTooltip(props) {
  return (
    <div className={`info-tool ${props.isOpen ? `info-tool_opened` : ``}`}>
      <div className="info-tool__container">
        <button className="info-tool__close" onClick={props.onClose} />
        <img
          src={`${props.status ? Success : Error}`}
          alt="иконка статуса операции"
          className="info-tool__image"
        />
        <p className="info-tool__paragraph">{`${
          props.status
            ? `Вы успешно зарегистрировались!`
            : `Что-то пошло не так! Попробуйте ещё раз.`
        }`}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
