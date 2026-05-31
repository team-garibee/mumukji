import {
  characterAll,
  mongjiDefault,
  mongjiLoading,
  mongjiNotfound,
  mongjiResult,
  mukjiDefault,
  mukjiEmpty,
  mukjiLoading,
  mukjiNotfound,
  mukjiResult,
  mungjiDefault,
  mungjiLoading,
  mungjiNotfound,
  mungjiResult,
} from '@mumukji/brand-assets';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AssetGroup,
  AssetItem,
} from '../../components/asset-gallery/AssetGallery';

const CharacterGallery = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '16px',
    }}>
    <AssetGroup label='단체'>
      <AssetItem exportName='characterAll'>
        <img src={characterAll} alt='characterAll' />
      </AssetItem>
    </AssetGroup>

    <AssetGroup label='먹지'>
      <AssetItem exportName='mukjiDefault'>
        <img src={mukjiDefault} alt='mukjiDefault' />
      </AssetItem>
      <AssetItem exportName='mukjiEmpty'>
        <img src={mukjiEmpty} alt='mukjiEmpty' />
      </AssetItem>
      <AssetItem exportName='mukjiLoading'>
        <img src={mukjiLoading} alt='mukjiLoading' />
      </AssetItem>
      <AssetItem exportName='mukjiNotfound'>
        <img src={mukjiNotfound} alt='mukjiNotfound' />
      </AssetItem>
      <AssetItem exportName='mukjiResult'>
        <img src={mukjiResult} alt='mukjiResult' />
      </AssetItem>
    </AssetGroup>

    <AssetGroup label='뭉지'>
      <AssetItem exportName='mungjiDefault'>
        <img src={mungjiDefault} alt='mungjiDefault' />
      </AssetItem>
      <AssetItem exportName='mungjiLoading'>
        <img src={mungjiLoading} alt='mungjiLoading' />
      </AssetItem>
      <AssetItem exportName='mungjiNotfound'>
        <img src={mungjiNotfound} alt='mungjiNotfound' />
      </AssetItem>
      <AssetItem exportName='mungjiResult'>
        <img src={mungjiResult} alt='mungjiResult' />
      </AssetItem>
    </AssetGroup>

    <AssetGroup label='몽지'>
      <AssetItem exportName='mongjiDefault'>
        <img src={mongjiDefault} alt='mongjiDefault' />
      </AssetItem>
      <AssetItem exportName='mongjiLoading'>
        <img src={mongjiLoading} alt='mongjiLoading' />
      </AssetItem>
      <AssetItem exportName='mongjiNotfound'>
        <img src={mongjiNotfound} alt='mongjiNotfound' />
      </AssetItem>
      <AssetItem exportName='mongjiResult'>
        <img src={mongjiResult} alt='mongjiResult' />
      </AssetItem>
    </AssetGroup>
  </div>
);

const meta: Meta<typeof CharacterGallery> = {
  title: 'Brand Assets/Characters',
  component: CharacterGallery,
};

export default meta;

export const All: StoryObj<typeof CharacterGallery> = {};
