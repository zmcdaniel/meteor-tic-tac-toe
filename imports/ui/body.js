import { Template } from 'meteor/templating';

import { Player } from '../../api/player.js'

import './body.html';

let count = 0;

Template.body.events({
    'click .square'(event){
        event.preventDefault();

        const id = event.target.id;

        if (count == 0) {
            count = 1;
            event.target.className = 'col-md-4 square x';
            // add x
            console.log(count);
        } else {
            count = 0;
            event.target.className = 'col-md-4 square o';
            // add o?
            console.log(count);
        }
    }
})

function checkWinner(){
    //insert big ol' array here!
}