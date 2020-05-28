import React, {Component} from "react";
import "../css/Cloud.css";

class Cloud extends Component {

    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.renderTask = this.renderTask.bind(this);
        this.setLocationOfTask = this.setLocationOfTask.bind(this);
        this.placeTask = this.placeTask.bind(this);
    }

    createTask(task) {
        var node = {
            key: task.key,
            name: task.text,

            color: 'blue',
            fontSize:10,
            top:200,
            left: 0,
        }
        return node;
    }

    setLocationOfTask(node, x, y) {
        node.left = x;
        node.top = y;
    }

    placeTask(nodeList) {
        for(var i = 0; i<nodeList.length; i++) {
            this.setLocationOfTask(nodeList[i], i*50, i*50);
        }
    }

    renderTask(node) {
        var style = {
            color: node.color,
            fontSize: node.fontSize,
            position: 'absolute',
            top: node.top,
            left: node.left
        };

        return (
                <p 
                    onClick={()=>this.deleteTask(node.key)}
                    key={node.key} 
                    className='node'
                    style={style}>{node.name}</p>
        );

    }

    deleteTask(key) {
        this.props.delete(key);
    }

    render() {
        var toDoEntries = this.props.entries;
        var nodesList = toDoEntries.map(this.createTask);
        this.placeTask(nodesList);
        var renderedList = nodesList.map(this.renderTask);

        return (
            <div className='nodeCollection'>
                {renderedList}
            </div>
        );
    }
}

export default Cloud;

// function normalize(wordList) {
//     var max = Number.MIN_SAFE_INTEGER;
//     var min = Number.MAX_SAFE_INTEGER;
//     var optimalMax = 55.0;
//     var optimalMin = 5.0;

//     // find max & min of all the words
//     for (var i = 0; i < words.length; i++) {
//         if (wordList[i].value > max) {
//         max = wordList[i].value;
//         }
//         if (wordList[i].value < min) {
//         min = wordList[i].value;
//         }
//     }

//     // normalize all the data into between 5 ~ 55
//     for (var i = 0; i < words.length; i++) {
//         if (max != 0){
//         wordList[i].value = (1 - Math.pow((1-(wordList[i].value / (max-min))), 1.75)) * (optimalMax - optimalMin) + optimalMin
//         }
//     }
//     return wordList
// }

// words = normalize(words);

// // sort by smallest value first
// words.sort(function(a,b) {
// return -1 * (a.value - b.value)
// });

// var cloud = document.getElementById("wordCloud");
// cloud.style.position = "relative";


// var startPoint = {
//     x: window.innerWidth/2,
//     y: window.innerHeight /3
// };

// var wordsDown = [];

// function createWordObject(wordCurr) {
//     var nodeContainer = document.createElement("div");
//     var nodeLink = document.createElement("a");
//     var nodeText = document.createTextNode(wordCurr.word);
//     nodeContainer.appendChild(nodeLink);
//     nodeContainer.style.position = "absolute";
//     nodeLink.appendChild(nodeText);
//     nodeLink.title = wordCurr.word;
//     nodeLink.href = wordCurr.url;
//     nodeLink.target ="_blank";
//     var strSize = wordCurr.value.toString() + 'px';
//     nodeLink.style.fontSize = strSize;

//     return nodeContainer;
// }

// function placeWord(word, x, y) {
//     cloud.appendChild(word);
//     word.style.left = x - word.offsetWidth/2 + "px";
//     word.style.top = y - word.offsetHeight/2 + "px";
//     wordsDown.push(word.getBoundingClientRect());
// }

// function spiral(i, callback) {
//     angle = i;
//     x = parseInt((1 + angle) * 2.5*Math.cos(angle));
//     y = parseInt((1 + angle) * Math.sin(angle));
//     return callback ? callback() : null;
// }

// function intersect(word, x, y) {
//     cloud.appendChild(word);    

//     word.style.left = x - word.offsetWidth/2 + "px";
//     word.style.top = y - word.offsetHeight/2 + "px";

//     var currentWord = word.getBoundingClientRect();

//     cloud.removeChild(word);

//     for(var i = 0; i < wordsDown.length; i+=1){
//         var comparisonWord = wordsDown[i];
        
//         if(!(currentWord.right + 3 < comparisonWord.left - 3||
//                 currentWord.left - 3> comparisonWord.right + 3 ||
//                 currentWord.bottom < comparisonWord.top ||
//                 currentWord.top > comparisonWord.bottom )){
            
//             return true;
//         }
//     }
//     return false;
// }

// (function placeWords() {
//     for (var i = 0; i < words.length; i++) {
//         var word = createWordObject(words[i]);

//         for (var j = 0; j < 360*3; j++) {
//             if (spiral(j, function() {
//                     if (!intersect(word, startPoint.x + x, startPoint.y + y)) {
//                         placeWord(word, startPoint.x + x, startPoint.y + y);
//                         return true;
//                     }
//                 })) {
//                 break;
//             }
//         }
//     }
// })();

// function colorLinks()
// {
//     colors = ["#cf4f3f", "#f04c3c", "#fc7345", "#FFAB8F"];
//     var links = document.getElementsByTagName("a");
//     for(var i=0;i<links.length;i++)
//     {
//     links[i].style.color = colors[i % colors.length];
//     links[i].style.opacity = 1;
//     }
// }    

// colorLinks();
