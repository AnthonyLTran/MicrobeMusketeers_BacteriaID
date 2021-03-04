
import './App.css';
import QuestionPage from "./Components/QuestionPage";
import {useState} from "react";
import firebase from './firebase';
import Header from "./Components/Header";
import * as React from "react";
import PersonTracker from "./Components/PersonTracker";

function App() {
    //set a state to use for updating array
   const [buttonNameArray, updateArray]= useState([{
       name: "Homepage",
       image: "nothing here for now",
       buttonList: ["Gram Positive", "Gram Negative"]
   }])


    //capture the values in an object
    const value = {buttonNameArray, updateArray}

    console.log(buttonNameArray)

    //create a context that can be used anywhere



  //TODO : This needs to be a function that executes once with our entire datastore. Once we do this, one person should run it. Everyone should add to this,


    //create a firebase object that contains the entire formatted database
    const germBase = firebase.database().ref();

    //get or create a reference to the germs child/object in the database
    const germs = germBase.child("germs");

    //create an object. All objects should look like this

    let germ = {
        name: "Homepage",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Gram Positive", "Gram Negative"]
    }
    let child1 =  {
        name: "Gram Positive",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["rod", "cone"]
    }

    let child2 =  {
        name: "Gram Negative",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["cat", "dog"]
    }

    let child3 =  {
        name: "rod",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }

    let child4 =  {
        name: "cone",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }

    let child5 =  {
        name: "cat",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }

    let child6 =  {
        name: "dog",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }




    //push this object to the database. Makes it easy to add/update from a gui if we make this a function that can run in the header! Maybe a good candidate to be moved there
    germs.push(germ);
    germs.push(child1);
    germs.push(child2);
    germs.push(child3);
    germs.push(child4);
    germs.push(child5);
    germs.push(child6);


//this needs a bunch of styling. Add a classname and use the index.css for this and/or bootstrap or similar


    return (
  <div>

      <PersonTracker.Provider value = {value} >

          <div>
              <Header germ = {buttonNameArray[buttonNameArray.length -1]} update = {updateArray}></Header>
          </div>
          <div>
              <QuestionPage germ = {buttonNameArray[buttonNameArray.length -1]} update = {updateArray} ></QuestionPage>
          </div>
      </PersonTracker.Provider>

  </div>
  );
}

export default App;
