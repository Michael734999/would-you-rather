import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Leaderboard extends Component {

    render() {

        const { login } = this.props;

        if(login === null) {
            return(
                <Redirect to={{
                    pathname: '/logout',
                    state: this.props.location
                }}/>
            )
        }

        const { users } =this.props
        const position = Object.values(users)
        const userPosition = position.map( data => {
            
            let LeaderboardData = {};

            LeaderboardData = {
                name: data.name,
                avatarURL: data.avatarURL,
                questionNum: data.questions.length,
                answerNum: (Object.keys(data.answers)).length,
                score: (Object.keys(data.answers)).length+data.questions.length
            }

            return LeaderboardData
        })

        userPosition.sort( (a,b) =>b.score-a.score)

        return(
            <div className="leaderboard">
            <h3>Leaderboard</h3>
            <ul>
            {userPosition.map(user => (
                <li key={user.name}>
                <div>
                <img className='userImg' alt={user.name} src={user.avatarURL}/>
                <h3>{user.name}</h3>
                </div>
                <div>
                <p>Questions asked: {user.questionNum}</p>
                <p>Questions answered: {user.answerNum}</p>
                <p>Score: {user.score}</p>
                </div>
                </li>
            ))}
            </ul>
            </div>
        )
    }
}

function mapStateToProps(users, login) {
    return{
        users, 
        login
    }
}

export default connect(mapStateToProps)(Leaderboard)