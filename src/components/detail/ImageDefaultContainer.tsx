import { FC } from 'react';
import { PokemonImgType } from '../../types';
import { Img } from '../ui/Img';

interface ImageDefaultContainerProps {
  sprites?: PokemonImgType;
}

export const ImageDefaultContainer: FC<ImageDefaultContainerProps> = ({
  sprites,
}) => {
  if (!sprites) {
    return null;
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center my-5 '>
        <div className='text-3xl bg-slate-300 rounded-xl px-3 py-1 my-5 w-full text-center'>
          기본 이미지
        </div>
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
