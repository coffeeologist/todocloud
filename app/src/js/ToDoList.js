import React, {Component} from "react";
import "../css/ToDoList.css";
import Clock from "./Clock";
import Cloud from "./Cloud";

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
            var input = this._inputElement.value.split("fl:", 2);
            var newItem = {
                text: input[0],
                key: Date.now(),
                fl: (input.length === 2 || input[1] === "") ? input[1] : 4
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
                    <Cloud entries={this.state.items}
                            delete={this.deleteItem}/>
                </div>

                <div className="input-div">
                    <form onSubmit={this.addItem}>
                        <input  className="input-prompt"  
                                ref={(a) => this._inputElement=a} 
                                placeholder="enter task">
                        </input>
                    </form>
                </div>

                <div className="clock">
                    <Clock/>
                </div>

            </div>
        )
    }
}

export default ToDoList;