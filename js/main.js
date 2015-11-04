import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import './ajax_setup';

import {TodoCollection} from './resources';
import {TodoView} from './views';
import MovieTodoView from './views/movietodo_view';

//grabbing the Wrapper DIV to display JSX usung react
let el = document.querySelector('.wrapper');

let todos = new TodoCollection();

ReactDom.render();



//todos.fetch().then(function() {
  

  //$('.wrapper').html(new TodoView(todos).render().$el);

//});


// console.log('Hello, World');
