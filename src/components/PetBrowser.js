import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    let petsArray = this.props.pets.map((pet) => {
      return (
        <Pet
          pet={pet}
          onAdoptPet = {this.props.onAdoptPet}
          isAdopted = {this.props.adoptedPets.includes(pet.id)}
        />
      )
    })

    return (
      <div className="ui cards">
        {petsArray}
      </div>
    );
  }
}

export default PetBrowser;
