import $ from 'jquery';
import {APP_ID, API_KEY} from './parse_auth';


$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

