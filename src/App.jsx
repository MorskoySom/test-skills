import { Component } from 'react'
import { FormTestCard } from "./Components/FormTestCard/FormTestCard";
import { TestCardList } from './Components/TestCardList/TestCardList';
import bodyQuestions from './questions.json'
import './App.css'

export class App extends Component {
  state = {
    allQuestions: bodyQuestions,
    filterCard: {
      categoryType: 'усі',
      answersQuantity: '4',
      questionNumber: '5',
    } 
    
    
  }

  changeQuestionNumber = newQuestionNumber => {
    this.setState(prevState => ({
      filterCard: {
        ...prevState.filterCard,
        questionNumber: newQuestionNumber
      }
    }))
  }

  changeAnswersQuantity = newAnswersQuantity => {
    this.setState(prevState => ({
      filterCard: {
        ...prevState.filterCard,
        answersQuantity: newAnswersQuantity
      }
    }))
  };

  changeCategoryType = newTypeCategory => {
    this.setState(prevState => ({
      filterCard: {
        ...prevState.filterCard,
        categoryType: newTypeCategory
      }
    }))
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
    const { categoryType } = this.state.filterCard;
    const geographyQuestions = this.getQuestionsByCategory(categoryType);    
    const parts = [ 'усі', ...this.state.allQuestions.map(item => item.category)];

    return (
      <>
        <div>Header</div>  
        <FormTestCard
          categories={parts}
          filterCard={this.state.filterCard}
          // selectedCategory={categoryType}
          // answersQuantity={answersQuantity}
          // questionNumber={questionNumber}
          onChangeCategory={this.changeCategoryType}
          onChangeAnswersQuantity={this.changeAnswersQuantity}
          onChangeQuestionNumber={this.changeQuestionNumber}
        />      
        <TestCardList
          filterCard={this.state.filterCard}
          // questionNumber={questionNumber}
          // answersQuantity={answersQuantity}
          quests={geographyQuestions}
        />      
      </>
    )
  }
}


// npm run deploy