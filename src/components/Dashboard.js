import React, {Component} from 'react';
import Pet from './Pet';

export default class Dashboard extends Component {

  onAdoptPet() {
    console.log('Adopted');
  }

  render() {
    return (
      <div>
        <Pet
          petToAdopt={this.props.cat}
          onAdopt={this.onAdoptPet}
        />
        <Pet
          petToAdopt={this.props.dog}
          onAdopt={this.onAdoptPet}
        />
      </div>
    );
  }
}
