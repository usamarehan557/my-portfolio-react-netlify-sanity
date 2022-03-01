import React from "react";
import image from "../wallpaper4.gif";
import firebase from '../assets/firebase.png';
import react from '../assets/React.png';
import api from '../assets/api.png'
import Spiro from '../assets/Spiro.svg';
import redux from '../assets/redux.svg';
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';

const width = window.innerWidth;
const height = window.innerHeight;

const head = {
    fontSize : width * 0.02,
    lineHeight: height * 0.00000001,
    color: "white",
}

export default function Home() {
    return (
        <main>
            <img src={image} alt="Usama" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-7xl text-green-100 cursive font-bold leading-none lg:leading-snug">
                    Hi, I'm Usama <br/>
                    <span style={head}>and I love to build amazing applications</span>
                </h1>
                <div style={{flexDirection: 'row', marginLeft: 25}}>
                    <img src={react} className="w-12 h-11 m-2" />
                    <img src={Spiro} className="w-11 h-11 m-2" />
                    <img src={redux} className="w-11 h-11 m-2" />
                </div>
                <div style={{flexDirection: 'row', marginLeft: 25}}>
                    <img src={html} className="w-10 h-10 m-2" />
                    <img src={css} className="w-10 h-10 m-2" />
                    <img src={js} className="w-11 h-11 m-2" />
                </div>
                <div style={{flexDirection: 'row', marginLeft: 25}}>
                    <img src={firebase} className="w-11 h-11 m-2" />
                    <img src={api} className="w-11 h-11 m-2" />
                </div>
            </section>
            
        </main>
    )
}