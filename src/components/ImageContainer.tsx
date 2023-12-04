import React, { FC } from 'react';
import { PokemonImgType } from '../types';
import Img from './ui/Img';

interface ImageContainerProps {
  sprites?: PokemonImgType;
}

const ImageContainer: FC<ImageContainerProps> = ({ sprites }) => {
  if (!sprites) {
    return null;
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center my-5 border-2'>
        <div className='flex flex-wrap justify-center'>
          <Img src={sprites?.front_default} alt='front_default' />

          <Img src={sprites?.front_female} alt='front_female' />

          <Img src={sprites?.front_shiny} alt='front_shiny' />

          <Img src={sprites?.front_shiny_female} alt='front_shiny_female' />

          <Img src={sprites?.back_default} alt='back_default' />

          <Img src={sprites?.back_female} alt='back_female' />

          <Img src={sprites?.back_shiny} alt='back_shiny' />

          <Img src={sprites?.back_shiny_female} alt='back_shiny_female' />
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
