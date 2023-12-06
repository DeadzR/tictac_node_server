


const mongoose= require('mongoose');
const playerSchema=require('./player');

const Schema=new mongoose.Schema({
    occupancy:{
        type:Number,
        default:2
    },
    maxRounds:{
        type:Number,
        default:2

    },
    currentRound:{
        type:Number,
        default:1,
        required:true,
    },
    players:[playerSchema],

    isJoin:{
        type:Boolean,
        default:true,
    },
    turn:playerSchema,
    turnIndex:{
        type:Number,
        default:0,
    }

});

const roomModel=new mongoose.model("Room",Schema);


module.exports=roomModel;

