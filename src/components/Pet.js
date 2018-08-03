import React from 'react';

export default function Pet(props) {


  return (
    <div>
      <section>
        <header>
          <h1>{props.petToAdopt.name}</h1>
          <img
            src={props.petToAdopt.imageURL}
            alt={props.petToAdopt.imageDescription}
          />
        </header>
        <main>
          <p>More about {props.petToAdopt.name}</p>
          <dl>
            <dt>Sex</dt>
            <dl>{props.petToAdopt.sex}</dl>

            <dt>Age</dt>
            <dl>{props.petToAdopt.age}</dl>

            <dt>Breed</dt>
            <dl>{props.petToAdopt.breed}</dl>

            <dt>Story</dt>
            <dl>{props.petToAdopt.story}</dl>
          </dl>
          <button
            onClick={() => props.onAdopt()}
          >
            Adopt
          </button>
        </main>
      </section>
    </div>
  );
}
