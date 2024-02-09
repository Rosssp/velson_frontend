import ReactDOM from "react-dom";
import "./Modal.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "../UI";
import { images } from "../../constants";
import { useState } from "react";

const Modal = ({ show, close }) => {
	const [subject, setsubject] = useState("");
	const [from, setfrom] = useState("");
	const [body, setbody] = useState("");
	const [isSent, setIsSent] = useState(false);
	const [isReCAPTCHA, setIsReCAPTCHA] = useState(false);

	// const sendMail = () => {
	// 	try {
	// 		const response = request({
	// 			endPoint: "sendmail",
	// 			method: "POST",
	// 			body: JSON.stringify({
	// 				from: from,
	// 				subject: subject,
	// 				body: body,
	// 			}),
	// 		});
	// 		console.log("message sended", response);
	// 	} catch {
	// 		console.warn("message ERROR");
	// 	}
	// };

	let sendMail = () => {
		// fetch("http://192.168.212.57:8080/sendmail", {
		fetch(`${process.env.REACT_APP_URL_API}/sendmail`, {
			method: "POST",
			body: JSON.stringify({
				from: from,
				subject: subject,
				body: body,
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}).then((response) => {
			response.json().then((data) => {
				console.log(response);
				if (response.ok) {
					setIsSent(true);
				}

				if (response.status === 200) {
					setIsSent(true);
				}
			});
		});
	};

	return ReactDOM.createPortal(
		<>
			{show ? (
				<div className="modalContainer" onClick={() => close()}>
					<div
						className={`modal ${!isSent ? "" : "sent"}`}
						onClick={(e) => e.stopPropagation()}
					>
						<img
							className="close"
							src={images.close}
							alt="Закрыть"
							onClick={() => close()}
						/>
						{!isSent ? (
							<>
								<header className="modal_header">
									<h2 className="modal_header-title">
										Задать свой <b>вопрос</b>
									</h2>
								</header>
								<main className="modal_content">
									<section>
										<p className="modal__description">
											Если у вас возник вопрос, пожалуйста, свяжитесь с нами.{" "}
											<br /> Внимание! Обращение на сайт не является заменой
											консультации у врача
										</p>
									</section>

									<form action="" className="modal__input">
										<input
											type="text"
											placeholder="ИМЯ"
											onChange={(e) => setsubject(e.currentTarget.value)}
										/>
										<input
											type="text"
											placeholder="E-MAIL"
											onChange={(e) => setfrom(e.currentTarget.value)}
										/>
										<textarea
											wrap="hard"
											cols="1"
											rows="4"
											type="text"
											placeholder="ВАШ ВОПРОС"
											onChange={(e) => setbody(e.currentTarget.value)}
										/>
									</form>
									<ReCAPTCHA
										sitekey={process.env.REACT_APP_SITE_KEY}
										onChange={() => {
											!null ? setIsReCAPTCHA(true) : setIsReCAPTCHA(false);
										}}
									/>
									<p className="modal__warning">
										Нажимая кнопку «Отправить», я даю свое согласие на обработку
										моих персональных данных, в соответствии с Федеральным
										законом от 27.07.2006 года №152-ФЗ «О персональных данных»,
										на условиях и для целей, определенных в Согласии на
										обработку персональных данных
									</p>
								</main>
								<footer className="modal_footer">
									<Button
										text={isSent ? "ОТПРАВЛЕНО" : "ОТПРАВИТЬ"}
										onClickAction={() => sendMail()}
										isSimple={false}
										color="white"
										isDisabled={!isReCAPTCHA}
									/>
								</footer>
							</>
						) : (
							<>
								<div className="modal__success">
									<img src={images.CheckCircle} alt="Успешно!" />
									<h2>
										Ваше сообщение <b>отправлено успешно</b>
									</h2>
								</div>
							</>
						)}
					</div>
				</div>
			) : null}
		</>,
		document.getElementById("modal")
	);
};

export default Modal;
