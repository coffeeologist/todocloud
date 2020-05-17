import React from 'react'

class ToDoCard extends React.Component {
    render() {
        return (
            <div className="to-do-card">
                <h4>{this.propos.card.title}</h4>
            </div>
        )
    }
}

export default ToDoCard