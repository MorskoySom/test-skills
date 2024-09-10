import { Component } from 'react'
import { FormTestCard } from "./Components/FormTestCard/FormTestCard";
import { TestCardList } from './Components/TestCardList/TestCardList';
import bodyQuestions from './questions.json'
import './App.css'

export class App extends Component {
  state = {
    allQuestions: bodyQuestions,
  }

  getQuestionsByCategory = (category) => {    
    const categoryObject = this.state.allQuestions.find(cat => cat.category === category);    
    return categoryObject ? categoryObject.questions : [];
  };



  render() {
    const geographyQuestions = this.getQuestionsByCategory("література");
    return <>            
      <FormTestCard />      
      <TestCardList quests={ geographyQuestions } />      
    </>
  }
}
