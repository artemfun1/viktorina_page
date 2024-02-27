import { useState } from "react";
import "./App.css";

function App() {
	const [answer, setAnswer] = useState("");
	const [isTrue, setIsTrue] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  const [isOpen,setIsOpen] = useState(false)

	const correctAnswer = {
		question1: "A",
	};

	function handleClickAnswerBtn(event: React.MouseEvent<HTMLButtonElement>) {
		const a = event.target as HTMLButtonElement;
		setAnswer(a.innerHTML);
	}

	function handleCheck() {
		if (answer === correctAnswer.question1) {
			setIsTrue(true);
     
        //записываем тут в объект и отправляем куда то
      
		} else {
      setIsFalse(true)
    }
	}

  function handleClick(){
    setIsTrue(false);
    setIsFalse(false)
    setIsOpen(false)
  }
  function handleClickBulb(){
    setIsOpen(true)
  }


	return (
		<>
			<main className="mainContent">
				{isTrue && (
					<div className="popapTrue">
						<h1>Правильный ответ :)</h1>
						<button onClick={handleClick}> Закрыть</button>
					</div>
				)}

{isFalse && (
					<div className="popapFalse">
						<h1>Неверно :(</h1>
						<button onClick={handleClick}> Закрыть</button>
					</div>
				)}

{isOpen && (
					<div className="popapTrue">
						<h1>Подсказка</h1>
						<button onClick={handleClick}> Закрыть</button>
					</div>
				)}


				<div className="playerScore">
					<div className="playerScoreBlock">
						<div className="Player">Anton</div>
						<div className="score">
							1000
							<img
								className="coinImg"
								src="/src/assets/coin.png"
								alt="монетка"
							/>
						</div>
					</div>
				</div>

				<div className="question">
					<button className="cancelBtn">
						<img src="/src/assets/close_btn.png" alt="close" />
					</button>
					<div className="questionText">
						<p>Choose the right answer</p>
						<p className="questionArea">Which shape shows thirds?</p>
					</div>
					<button onClick={handleClickBulb} className="bulb">
						<img src="/src/assets/bulb.png" alt="bulb" />
					</button>
				</div>

				<div className="visual">
					<img
						className="taskImg"
						src="/src/assets/task_img.png"
						alt="task_img"
					/>
				</div>
			</main>

			<div className="answersBlock">
				<button
					onClick={e => handleClickAnswerBtn(e)}
					className="btn btn-variant"
				>
					A
				</button>
				<button
					onClick={e => handleClickAnswerBtn(e)}
					className="btn btn-variant"
				>
					B
				</button>
				<button
					onClick={e => handleClickAnswerBtn(e)}
					className="btn btn-variant"
				>
					C
				</button>
				<button onClick={handleCheck} className="btn btn-check">
					Check
				</button>
			</div>
		</>
	);
}

export default App;
