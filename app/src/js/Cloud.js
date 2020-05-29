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
        this.spiral = this.spiral.bind(this);
    }

    createTask(task) {
        var colors = ["#4d6f88", "#7f7c8e", "#7394aa", "#95a0af", "#8b848c"];
        var node = {
            key: task.key,
            name: task.text,

            color: colors[Math.floor(Math.random()*colors.length)],
            fontSize:25,
            top:200,
            left: 0,
            
            width:25*task.text.length,
            height:25,

            bottom: 0,
            right: 0
        }

        node.bottom = node.top + node.height;
        node.right = node.left + node.width;

        // var heh = this.renderTask(node);
        // node.width = this.dummy.offsetWidth;
        return node;
    }

    setLocationOfTask(node, x, y) {
        node.left = x - node.width/2;
        node.top = y;

        node.bottom = node.top + node.height;
        node.right = node.left + node.width;
    }

    spiral(i){
        var angle=i;
        var xp = parseInt((1 + angle) * 2.5*Math.cos(angle));
        var yp = parseInt((1 + angle) * Math.sin(angle));
        var dif = {
            x:xp,
            y:yp
        };
        return dif;
    }

    intersect(node, wordsDown) {
        for(var i = 0; i < wordsDown.length; i+=1){
            var comparisonWord = wordsDown[i];
            
            if(!(node.right + 3 < comparisonWord.left - 3||
                    node.left - 3> comparisonWord.right + 3 ||
                    node.bottom < comparisonWord.top ||
                    node.top > comparisonWord.bottom )){
                
                return true;
            }
        }
        return false;
    }
    // componentDidMount() {
    //     node.width = this.dummy.offsetWidth;
    //     node.height = this.dummy.offsetHeight;
    // }

    placeTask(nodeList) {
        var wordsDown = []

        var starting = {
            x: window.innerWidth/2,
            y: window.innerHeight/3
        }
        for(var i = 0; i<nodeList.length; i++) {
            var task = nodeList[i];

            var isSet = false;
            inner:
            for(var j = 0; j<360; j++) {
                var dif = this.spiral(j);
                this.setLocationOfTask(task, starting.x + dif.x, starting.y +dif.y);
                isSet = !this.intersect(task, wordsDown);
                if (isSet) {
                    wordsDown = wordsDown.concat(task);
                    break inner;
                }
            }
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

        var borderStyle = {
            display: "inline-block",
            color:"black",
            width: node.width,
            height: node.height,
            position: 'absolute',
            top: node.top,
            left: node.left,
            border: "4px dotted blue",
            // padding: 15
        }

        return (
            <div>
                <div style={borderStyle}>

                </div>
                <p 
                    ref={el => (this.dummy = el)}
                    onClick={()=>this.deleteTask(node.key)}
                    key={node.key} 
                    className='node'
                    style={style}>

                    {node.name}: {node.width}
                </p>

            </div>
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
