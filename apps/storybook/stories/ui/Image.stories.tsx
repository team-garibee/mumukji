import { Image } from '@mumukji/ui';
import type { ImageProps } from '@mumukji/ui';
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
  title: 'UI/Image',
  component: Image,
  parameters: {
    layout: 'padded',
  },
  args: {
    src: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    m: 4,
  },
};

export const WithFallback: Story = {
  args: {
    src: 'https://picsum.photos/broken-url-for-fallback-demo',
    fallback: <span>이미지를 불러오지 못했습니다.</span>,
  },
};

// `Meta<typeof Image>`는 기본 제네릭(`as` 없음 = 'img') 기준으로 고정되어 있어,
// `as`로 주입한 컴포넌트 고유 prop(objectFit)까지는 메타 타입 레벨에서 추론 불가.
// 실제 사용처에서 `<Image as={...} />`로 직접 쓸 때는 Image.tsx에서 검증한 대로 타입이 정상 추론되며,
// 이 캐스팅은 스토리 args 타이핑에서만 필요.
export const AsCustomComponent: Story = {
  args: {
    as: DemoPolymorphicImage,
    src: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '커스텀 컴포넌트로 렌더링된 이미지',
    objectFit: 'contain',
  } as ImageProps<typeof DemoPolymorphicImage>,
};
