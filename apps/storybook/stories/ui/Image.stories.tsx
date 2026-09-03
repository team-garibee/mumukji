import { Image } from '@mumukji/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

// as prop으로 커스텀 컴포넌트를 주입하는 예시를 위한 데모용 컴포넌트.
// next/image 대신, src/alt 외에 고유 prop(objectFit)을 갖는 이미지 래퍼 컴포넌트로 가정.
type DemoPolymorphicImageProps = {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain';
};

const DemoPolymorphicImage: ComponentType<DemoPolymorphicImageProps> = ({
  src,
  alt,
  objectFit = 'cover',
}) => <img src={src} alt={alt} style={{ objectFit }} />;

const meta: Meta<typeof Image> = {
  title: 'UI/01. Primitive/Image',
  component: Image,
  parameters: {
    layout: 'padded',
  },
  args: {
    src: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D',
    alt: '맛있는 비빔밥',
    height: 200,
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {};

// radius는 Image의 전용 prop이 아님(Visual → SCSS/className 정책).
// 필요하면 이렇게 className으로 `Radius-*` 유틸리티 클래스를 직접 전달한다.
export const WithClassNameRadius: Story = {
  args: {
    className: 'Radius-m',
  },
};

// margin은 Layout 속성이라 Image가 직접 prop으로 받는다.
export const WithMargin: Story = {
  args: {
    m: 'md',
  },
};

// 커스텀 fallback 노출 예시
export const WithFallback: Story = {
  args: {
    src: 'https://picsum.photos/broken-url-for-fallback-demo',
    fallback: <span>이미지를 불러오지 못했습니다.</span>,
  },
};

// fallback prop을 전달하지 않아 기본 폴백(DefaultFallback)이 노출되는 스토리.
// width/height를 지정하지 않아 meta.args의 height(200)도 명시적으로 해제한다.
// → 폴백 영역이 아이콘 크기만큼만(고정 padding 없이) 렌더링되는 것을 확인.
export const WithDefaultFallback: Story = {
  args: {
    src: 'https://picsum.photos/broken-url-for-fallback-demo',
    height: undefined,
  },
};

// width/height를 지정한 경우, 폴백 영역도 그 크기를 그대로 따라가는 것을 확인.
export const WithDefaultFallbackSized: Story = {
  args: {
    src: 'https://picsum.photos/broken-url-for-fallback-demo',
    width: 200,
    height: 200,
  },
};

// `Meta<typeof Image>`의 args는 기본 `img` 기준으로 타입이 고정되어 있다.
// 따라서 `as`로 바꾼 컴포넌트의 고유 props는 해당 스토리에서 직접 렌더링한다.
export const AsCustomComponent: Story = {
  render: () => (
    <Image
      as={DemoPolymorphicImage}
      src='https://images.unsplash.com/photo-1609501676725-7186f017a4b7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D'
      alt='커스텀 컴포넌트로 렌더링된 이미지'
      objectFit='contain'
    />
  ),
};
