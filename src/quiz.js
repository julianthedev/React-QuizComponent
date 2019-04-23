import React, {Component} from 'react'
let quizData = require('./quiz_data_json')

class Quiz extends Component {
  constructor(props){
    this.state={quiz_position: 1}
    super(props){

    }
  }
  render(){
    return <div><div className="QuizQuestion"> {quizData.quiz_questions[0].instruction_text}</div></div>
  }

}

export default Quiz
