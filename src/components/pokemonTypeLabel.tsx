import React from 'react';
import { PokemonType } from '../types';
import { typeConverter } from '../utils/typeConverter';
import { typeBgColor } from '../utils/typeColor';

interface typeLabelProps {
  types: PokemonType;
}

const PokemonTypeLabel: React.FC<typeLabelProps> = ({ types }) => {
  const typeName = types.type ? types.type.name : 'normal';
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
