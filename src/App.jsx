import { Component } from 'react'
import { FormTestCard } from "./Components/FormTestCard/FormTestCard";
import { TestCardList } from './Components/TestCardList/TestCardList';
import bodyQuestions from './questions.json'
import './App.css'

export class App extends Component {
  state = {
    allQuestions: bodyQuestions,
    categoryType: 'усі',
    answersQuantity: '4',
    questionNumber: '5',
  }

  changeQuestionNumber = newQuestionNumber => {
    this.setState({ questionNumber: newQuestionNumber })
  }

  changeAnswersQuantity = newAnswersQuantity => {
    this.setState({ answersQuantity: newAnswersQuantity })
  };

  changeCategoryType = newTypeCategory => {
    this.setState({ categoryType: newTypeCategory })
  };
  
  getQuestionsByCategory = (category) => {
    if (category === 'усі') {
      return this.state.allQuestions.flatMap(cat => cat.questions);
    } else {
      const categoryObject = this.state.allQuestions.find(cat => cat.category === category);
      return categoryObject ? categoryObject.questions : [];
    }
  }



  render() {
    const { categoryType, answersQuantity, questionNumber } = this.state;
    const geographyQuestions = this.getQuestionsByCategory(categoryType);    
    const parts = [...this.state.allQuestions.map(item => item.category), 'усі'];

    return (
      <>
        <div>Header</div>  
        <FormTestCard
          categories={parts}
          selectedCategory={categoryType}
          answersQuantity={answersQuantity}
          questionNumber={questionNumber}
          onChangeCategory={this.changeCategoryType}
          onChangeAnswersQuantity={this.changeAnswersQuantity}
          onChangeQuestionNumber={this.changeQuestionNumber}
        />      
        <TestCardList
          quests={geographyQuestions}
          answersQuantity={answersQuantity} />      
      </>
    )
  }
}
