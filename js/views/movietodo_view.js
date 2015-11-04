/*
 *
 * This is a template for each todo item.
 *
 */

// function template(model) {
//   // check of the model is complete
//   let complete = model.isComplete();
  
//   // show a different icon based on if model is complete
//   let fa = complete ? 'undo' : 'close';
  
//   // use a different action based on if model is complete
//   let action = complete ? 'undo' : 'remove';
  
//   // define our template
//   return `
//     <li class="todo">
//       <span class="title ${complete ? 'complete' : ''}">
//         ${model.get('title')}
//       </span>
//       <button class="${action}" data-id="${model.id}">
//         <i class="fa fa-${fa}"></i>
//       </button>
//     </li>
//   `;
// }


import React from 'react';
import 'jquery-serializejson';
import TodoModel from '../resources/todo_model';

let collection = new TodoCollection();
let model = new TodoModel();
// let temp=this.collection.fetch();
id={this.collection.objectId};
data={this.collection.toJSON()};
let singleTodo = this.collection.get(id)



let MovieTodoView= React.createClass({
  render() {
    return ( 
        <div className='root-Todo'>
            <ul>
                <li className='todo'>
                <span className='title'>
                {this.props.data.title}
                </span></li>
            </ul>
        </div>
      
    );
  }
});

export default MovieTodoView;