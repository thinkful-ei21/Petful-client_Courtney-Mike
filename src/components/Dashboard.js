import React, {Component} from 'react';
import { connect } from 'react-redux'
import Pet from './Pet';
import { adoptCat, fetchCat } from '../actions/cat';
import { adoptDog, fetchDog } from '../actions/dog';

export class Dashboard extends Component {

  componentDidMount() {
    this.fetchDog();
    this.fetchCat();
  }

  adoptDog() {
    this.props.dispatch(adoptDog());
  }

  adoptCat() {
    this.props.dispatch(adoptCat());
  }

  fetchDog() {
    this.props.dispatch(fetchDog());
  }

  fetchCat() {
    this.props.dispatch(fetchCat());
  }

  render() {
    return (
      <div>
        <Pet
          petToAdopt={this.props.cat}
          onAdopt={this.adoptCat.bind(this)}
        />
        <Pet
          petToAdopt={this.props.dog}
          onAdopt={this.adoptDog.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dog: state.dog.dog,
  cat: state.cat.cat
});

export default connect(mapStateToProps)(Dashboard);
