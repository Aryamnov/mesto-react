import Success from '../images/Success.svg';

function InfoTooltip() {
    return(
        <div className="info-tool info-tool_opened">
            <div className="info-tool__container">
                <button className="info-tool__close" />
                <img src={Success} alt="иконка статуса операции" className="info-tool__image" />
                <p className="info-tool__paragraph">Вы успешно зарегистрировались!</p>
            </div>
        </div>
    )
}

export default InfoTooltip;