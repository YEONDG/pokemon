import React, { FC } from 'react';
import { PokemonVersionsGeneration } from '../types';
import ImageContainer from './ImageContainer';
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

  console.log(versions?.['generation-i']['red-blue']);
  return (
    <div className='flex flex-col justify-center items-center my-5 border-2'>
      <div>버전별 이미지</div>
      <div className='flex flex-col justify-center'>
        <VersionImgSprites
          sprites={versions?.['generation-i']['red-blue']}
          title='1세대 레드블루'
        />

        <VersionImgSprites
          sprites={versions?.['generation-i']['yellow']}
          title='1세대 옐로우'
        />
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
        <VersionImgSprites
          sprites={versions?.['generation-iv']['diamond-pearl']}
          title='4세대 다이아몬드-펄'
        />
        <VersionImgSprites
          sprites={versions?.['generation-iv']['heartgold-soulsilver']}
          title='4세대 허트골드-소울실버'
        />
        <VersionImgSprites
          sprites={versions?.['generation-iv'].platinum}
          title='4세대 플래티넘'
        />
      </div>
    </div>
  );
};

export default ImageVersionsContainer;
