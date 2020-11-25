import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Profile from "./profile/profile"


const profiles = [ {

 fullName:"Zaha Haddid",
 bio: "née le 31 octobre 1950 à Bagdad, en Irak, est une architecte irako-britannique, figure du mouvement déconstructiviste. Elle a été la première femme à recevoir le prix Pritzker en 2004, et juste avant sa mort la prestigieuse médaille d'or royale pour l'architecture.",
 profession: "Architect", 
},

{
  
 fullName:"Rafael Nadal",
 bio: "né le 3 juin 1986 à Manacor en Espagne. Il est le premier enfant de Sebastián Nadal et Ana María Parera. Il a une sœur, de cinq ans sa cadette, nommée María Isabel. Son oncle Miguel Ángel est un ancien joueur du FC Barcelone, du RCD Majorque et de la sélection espagnole durant les années 1990.",
 profession : "Tennis Player" ,

},
];



function HandleName() {


 
  return (
  <section className ="handleName">
    {profiles.map((profile, index) => {
      return (
        <Profile key = {index} {...profile}><img src = "https://i.pinimg.com/originals/c7/4a/77/c74a77f0206f2e6af2c99ad5ddb52795.jpg" alt= "inconnue"/></Profile>
      )
    })}
  

  </section>)
};






ReactDom.render(<HandleName />, document.getElementById('root'));

