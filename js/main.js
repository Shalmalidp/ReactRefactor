import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import './ajax_setup';

import {TodoCollection} from './resources';
import {TodoView} from './views';

	//grabbing the Wrapper DIV to display JSX usung react
let appElement = document.querySelector('.wrapper');

let todos = new TodoCollection();

render(component){
	ReactDOM(component,this.el);
};



todos.fetch().then(function() {
  

  //$('.wrapper').html(new TodoView(todos).render().$el);

});


console.log('Hello, World');
