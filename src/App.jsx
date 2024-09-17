import { Component } from 'react'
import { FormTestCard } from "./Components/FormTestCard/FormTestCard";
import { TestCardList } from './Components/TestCardList/TestCardList';
import bodyQuestions from './questions.json'
import './App.css'

export class App extends Component {
  state = {
    allQuestions: bodyQuestions,
    filterCard: {
      categoryType: "наука",
      answersQuantity: '6',
      questionNumber: '15',
    }    
  }

  changefilterCard = (key, value) => {
    this.setState(prevState => ({
      filterCard: {
        ...prevState.filterCard,
        [key]: value
      }
    }))
  }
  
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
          onChangeCategory={this.changeCategoryType}
          onChangeAnswersQuantity={this.changeAnswersQuantity}
          onChangeQuestionNumber={this.changeQuestionNumber}
          onChangefilterCard={this.changefilterCard}
        />      
        <TestCardList
          filterCard={this.state.filterCard}          
          quests={geographyQuestions}
        />      
      </>
    )
  }
}


// npm run deploy