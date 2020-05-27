import React, {Component} from "react";
import "../css/ToDoList.css"
import ToDoItems from "./ToDoItems";
import Clock from "./Clock";

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

        }

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            };
        });

        this._inputElement.value = "";

        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items:filteredItems
        });
    }

    render() {
        return (
            <div className="toDoListMain">
                <div className="cloud">
                    <ToDoItems entries={this.state.items}
                            delete={this.deleteItem}/>
                </div>

                <div className="input-div">
                    <form onclick="this.select()" onSubmit={this.addItem}>
                        <input  className="input-prompt"  
                                ref={(a) => this._inputElement=a} 
                                placeholder="enter task">
                        </input>
                    </form>
                </div>

                <Clock/>

            </div>
        )
    }
}

export default ToDoList;