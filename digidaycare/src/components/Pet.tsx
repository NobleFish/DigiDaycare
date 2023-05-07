import * as React from 'react';
import { FC } from 'react';

interface PetProps {
    name: string;
};

type PetState = {
    // Overall happiness
    happiness: number;
    // Food is a measure of hunger
    food: number;
    // Energy is a measure of tiredness
    energy: number;
    // Fun is a measure of boredom
    fun: number;
    // Cleanliness is a measure of how dirty the pet is
    cleanliness: number;
    // Bladder is a measure of how soon the pet needs to be walked
    bladder: number;
    // Age is a measure of how old the pet is
    age: number;


};

export const Pet: FC<PetProps> = ({name}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
