import React from 'react';
import { PokemonBasic } from '../types';
import { typeConverter } from '../utils/typeConverter';
import { typeBgColor } from '../utils/typeColor';

interface typeLabelProps {
  types: PokemonBasic;
}

export const PokemonTypeLabel: React.FC<typeLabelProps> = ({ types }) => {
  const typeName = types.name;
  const translatedTypeName = typeConverter[typeName];

  return (
    <div
      className={`flex w-full rounded-md justify-center items-center ${typeBgColor[typeName]}`}
    >
      <div className='text-xl text-white font-bold '>{translatedTypeName}</div>
    </div>
  );
};
