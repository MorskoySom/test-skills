import { nanoid } from 'nanoid';
import { Component } from 'react';
import { SearchTestSession } from './SearchTestSession/SearchTestSession';

export class TestsList extends Component {

    state = {
        savedTestSessions: [{
            name: 'Базовий',      
            categoryType: "географія",
            answersQuantity: '3',
            questionNumber: '5',      
        }, {
            name: 'Базовий другий',      
            categoryType: "наука",
            answersQuantity: '4',
            questionNumber: '7',      
        }, {
            name: 'Базовий third',      
            categoryType: "література",
            answersQuantity: '5',
            questionNumber: '6',      
        }
        ],
    }

    changeFilterSearch = (key, value) => {
    this.setState(prevState => ({
      savedTestSessions: {
        ...prevState.filterCard,
        [key]: value
      }
    }))
    }

    render() {
        const readyTests = this.state.savedTestSessions.map(test => test.name);
        const categories = this.state.savedTestSessions.map(test => test.name);        

        return (
            <div>
                <SearchTestSession
                    categories={categories}
                    readyTests={readyTests}
                    tests={this.state.savedTestSessions}
                    onChangeFilterSearch={this.changeFilterSearch}
                />
                <h3>TestsList</h3>
                <div>
                    {this.state.savedTestSessions.map(test => (
                        <div key={nanoid()}>{test.name}
                            <h5>Тема  {test.categoryType}</h5>
                            <h5>Кількість варіантів відповідей  {test.answersQuantity}</h5>
                            <h5>Кількість питаннь  {test.questionNumber}</h5>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

};


export default TestsList;