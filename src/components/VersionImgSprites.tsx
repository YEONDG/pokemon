import React, { FC } from 'react';
import { PokemonVersionsImgType } from '../types';
import Img from './ui/Img';

interface VersionImgSpritesProps {
  title: string;
  sprites: PokemonVersionsImgType;
}

const VersionImgSprites: FC<VersionImgSpritesProps> = ({ title, sprites }) => {
  if (!sprites.front_default) {
    return;
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center my-5'>
        <div>{title}</div>
        <div className='flex flex-wrap justify-center items-center'>
          <Img src={sprites?.front_default} alt='front_default' />

          <Img src={sprites?.front_gray} alt='front_gray' />

          <Img src={sprites?.front_transparent} alt='transparent' />

          <Img src={sprites?.back_default} alt='back_default' />

          <Img src={sprites?.back_gray} alt='back_gray' />

          <Img src={sprites?.back_transparent} alt='back_transparent' />
        </div>
      </div>
    </>
  );
};
export default VersionImgSprites;
