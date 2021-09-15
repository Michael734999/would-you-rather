import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import { Link, Redirect } from 'react-router-dom'
import Question from './Question'
import 'react-tabs/style/react-tabs.css'

class Dashboard extends Component {

    state= {
        questionsAnswered: false,
    }

    render() {
        console.log(this.props.questions)

        if(this.props.login === null) {
            return (
                <Redirect to={{
                    pathname: '/logout',
                    state: this.props.location
                }}/>
            )
        }


        const answered = Object.keys(this.props.users[this.props.login].answers)
        answered.sort((a,b)=>this.props.questions[b].timestamp-this.props.questions[a].timestamp)
        const unanswered = Object.keys(this.props.questions).filter((question)=>!answered.includes(question))
        unanswered.sort((a,b)=>this.props.questions[b].timestamp-this.props.questions[a].timestamp)

        return(
            <div className="contain">
            <div className="dashboard">
                <Tabs>
                    <TabList className="tabs">
                    <Tab className="tab">Unanswered Questions</Tab>
                    <Tab className="tab" >Answered Questions</Tab>
                    </TabList>

                    <TabPanel>
                    <ul>
                    {unanswered.map(id => (
                        <li key={id}>
                            <div className="questions">
                            <Question 
                            id={id} 
                            avatarURL={this.props.users[this.props.questions[id].author].avatarURL}
                            author={this.props.users[this.props.questions[id].author].name}
                            />
                            <Link to={{
                                pathname: `/questions/${id}`,
                                state: {questionsAnswered: false}
                            }}>
                            <button className="btn">
                            View
                            </button>
                            </Link>
                            </div>
                        </li>
                    ))}
                    </ul>
                    </TabPanel>
                   
                    <TabPanel> 
                    <ul>
                    {answered.map(id => (
                        <li key={id}>
                            <div className="questions">
                            <Question 
                            id={id} 
                            avatarURL={this.props.users[this.props.questions[id].author].avatarURL}
                            author={this.props.users[this.props.questions[id].author].name}
                            />
                           <Link to={{
                                pathname: `/questions/${id}`,
                                state: {questionsAnswered: true}
                            }}>
                            <button className="btn">
                            View
                            </button>
                            </Link>
                            </div>
                        </li>
                    ))}
                    </ul>
                    </TabPanel>
                </Tabs>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        users: state.users,
        questions: state.questions,
        login: state.login,
    }
}

export default connect(mapStateToProps)(Dashboard)