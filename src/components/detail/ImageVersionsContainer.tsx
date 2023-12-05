import React, { FC } from 'react';
import { PokemonVersionsGeneration } from '../../types';
import VersionImgSprites from './VersionImgSprites';

interface ImageVersionsContainerProps {
  versions?: PokemonVersionsGeneration;
}
const ImageVersionsContainer: FC<ImageVersionsContainerProps> = ({
  versions,
}) => {
  if (!versions) {
    return null;
  }

  console.log(versions);
  return (
    <div className='flex flex-col justify-center items-center my-5'>
      <div className='text-3xl bg-slate-300 rounded-xl text-center px-3 py-1 my-5 w-full '>
        버전별 이미지
      </div>
      <div className='flex flex-col justify-center items-center gap-7'>
        <div className='flex gap-4'>
          <VersionImgSprites
            sprites={versions?.['generation-i']['red-blue']}
            title='1세대 레드블루'
          />

          <VersionImgSprites
            sprites={versions?.['generation-i']['yellow']}
            title='1세대 옐로우'
          />
        </div>
        <div className='flex gap-4'>
          <VersionImgSprites
            sprites={versions?.['generation-ii'].crystal}
            title='2세대 크리스탈'
          />
          <VersionImgSprites
            sprites={versions?.['generation-ii'].gold}
            title='2세대 골드'
          />
          <VersionImgSprites
            sprites={versions?.['generation-ii'].silver}
            title='2세대 실버'
          />
        </div>
        <div className='flex gap-4'>
          <VersionImgSprites
            sprites={versions?.['generation-iii'].emerald}
            title='3세대 에메랄드'
          />
          <VersionImgSprites
            sprites={versions?.['generation-iii']['firered-leafgreen']}
            title='3세대 파이어레드-리프그린'
          />
          <VersionImgSprites
            sprites={versions?.['generation-iii']['ruby-sapphire']}
            title='3세대 루비-사파이어'
          />
        </div>
        <div className='flex gap-4'>
          <VersionImgSprites
            sprites={versions?.['generation-iv']['diamond-pearl']}
            title='4세대 다이아몬드-펄'
          />
          <VersionImgSprites
            sprites={versions?.['generation-iv']['heartgold-soulsilver']}
            title='4세대 하트골드-소울실버'
          />
          <VersionImgSprites
            sprites={versions?.['generation-iv'].platinum}
            title='4세대 플래티넘'
          />
        </div>
        <div className='flex gap-4'>
          <VersionImgSprites
            sprites={versions?.['generation-v']['black-white']}
            title='5세대 블랙-화이트'
          />
        </div>
        <div className='flex gap-4'>
          <VersionImgSprites
            sprites={versions?.['generation-vi']['omegaruby-alphasapphire']}
            title='6세대 오메가루비-알파사파이어'
          />
          <VersionImgSprites
            sprites={versions?.['generation-vi']['x-y']}
            title='6세대 XY'
          />
        </div>
        <div className='flex'>
          <VersionImgSprites
            sprites={versions?.['generation-vii']['ultra-sun-ultra-moon']}
            title='7세대 울트라썬-울트라문'
          />
        </div>
      </div>
    </div>
  );
};

export default ImageVersionsContainer;
