import React from 'react';
import { PokemonBasic } from '../types';
import { typeConverter } from '../utils/typeConverter';
import { typeBgColor } from '../utils/typeColor';

interface typeLabelProps {
  types: PokemonBasic;
}

const PokemonTypeLabel: React.FC<typeLabelProps> = ({ types }) => {
  const typeName = types ? types.name : 'normal';
  const translatedTypeName = typeConverter[typeName];

  return (
    <div
      className={`flex w-full ${typeBgColor[typeName]} rounded-md justify-center items-center`}
    >
      <div className='text-xl text-white font-bold '>{translatedTypeName}</div>
    </div>
  );
};

export default PokemonTypeLabel;
