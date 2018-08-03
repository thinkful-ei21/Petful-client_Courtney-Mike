import React from 'react';

export default function Dashboard(props) {

  return (
    <div>
      <section>
        <header>
          <h1>{props.catToAdopt.name}</h1>
          <img
            src={props.catToAdopt.imageURL}
            alt={props.catToAdopt.imageDescription}
          />
        </header>
        <main>
          <p>More about {props.catToAdopt.name}</p>
          <dl>
            <dt>Sex</dt>
            <dl>{props.catToAdopt.sex}</dl>

            <dt>Age</dt>
            <dl>{props.catToAdopt.age}</dl>

            <dt>Breed</dt>
            <dl>{props.catToAdopt.breed}</dl>

            <dt>Story</dt>
            <dl>{props.catToAdopt.story}</dl>
          </dl>
          <button>Adopt</button>
        </main>
      </section>

      <section>
        <header>
          <h1>{props.dogToAdopt.name}</h1>
          <img
            src={props.dogToAdopt.imageURL}
            alt={props.dogToAdopt.imageDescription}
          />
        </header>
        <main>
          <p>More about {props.dogToAdopt.name}</p>
          <dl>
            <dt>Sex</dt>
            <dl>{props.dogToAdopt.sex}</dl>

            <dt>Age</dt>
            <dl>{props.dogToAdopt.age}</dl>

            <dt>Breed</dt>
            <dl>{props.dogToAdopt.breed}</dl>

            <dt>Story</dt>
            <dl>{props.dogToAdopt.story}</dl>
          </dl>
          <button>Adopt</button>
        </main>
      </section>
    </div>
  );
}
