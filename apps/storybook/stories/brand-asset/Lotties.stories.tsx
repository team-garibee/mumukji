import { mukjiDancing, mukjiThinking } from '@mumukji/brand-assets';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Lottie from 'lottie-react';
import {
  AssetGroup,
  AssetItem,
} from '../../components/asset-gallery/AssetGallery';

const LottieGallery = () => (
  <div style={{ padding: '16px' }}>
    <AssetGroup label='먹지'>
      <AssetItem exportName='mukjiDancing' size={300}>
        <Lottie animationData={mukjiDancing} loop />
      </AssetItem>
      <AssetItem exportName='mukjiThinking' size={300}>
        <Lottie animationData={mukjiThinking} loop />
      </AssetItem>
    </AssetGroup>
  </div>
);

const meta: Meta<typeof LottieGallery> = {
  title: 'Brand Assets/Lotties',
  component: LottieGallery,
};

export default meta;

export const All: StoryObj<typeof LottieGallery> = {};
