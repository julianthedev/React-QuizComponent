import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }
  handleClick(buttonText) {
    // buttonText === this.props.quiz_question.answer &&
    //   this.props.showNextQuestionHandler();
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }
  render() {
    return (
      <main>
        <section>
          {this.state.incorrectAnswer ? (
            <p className="error">Incorrect answer. You're an idiot.</p>
          ) : null}
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton
                    clickHandler={this.handleClick.bind(this)}
                    key={index}
                    button_text={answer_option}
                  />
                );
              }
            )}
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;
