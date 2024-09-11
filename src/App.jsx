import { Component } from 'react'
import { FormTestCard } from "./Components/FormTestCard/FormTestCard";
import { TestCardList } from './Components/TestCardList/TestCardList';
import bodyQuestions from './questions.json'
import './App.css'

export class App extends Component {
  state = {
    allQuestions: bodyQuestions,
    categoryType: "географія",
  }

  changeCategoryType = newTypeCategory => {
    this.setState({ categoryType: newTypeCategory })
  };
  
  getQuestionsByCategory = (category) => {    
    const categoryObject = this.state.allQuestions.find(cat => cat.category === category);    
    return categoryObject ? categoryObject.questions : [];
  };



  render() {
    const { categoryType } = this.state;
    const geographyQuestions = this.getQuestionsByCategory(categoryType);
    const parts = this.state.allQuestions.map(item => item.category);

    return (
      <>
        <div>Header</div>  
        <FormTestCard
          categories={parts}
          selectedCategory={categoryType}
          onChangeCategory={this.changeCategoryType}
        />      
        <TestCardList quests={ geographyQuestions } />      
      </>
    )
  }
}
