import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  color,
  spacing,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  opacity,
  radius,
} from './primitives/primitive';
import { GridList } from './story-ui/GridList';
import { StackList } from './story-ui/StackList';

const meta: Meta = {
  title: 'Tokens/Primitive',
  tags: ['!autodocs'],
};

export default meta;

export const Color: StoryObj = {
  name: 'Color & Opacity',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {Object.entries(color).map(([groupName, shades]) => (
        <GridList
          key={groupName}
          title={groupName}
          items={Object.entries(shades).map(([shade, value]) => ({
            key: shade,
            boxStyle: {
              background: value as string,
              borderRadius: 8,
              border: '1px solid #eee',
            },
            labels: [shade, value as string],
          }))}
        />
      ))}
      <GridList
        title='Opacity'
        items={Object.entries(opacity).map(([key, value]) => ({
          key,
          boxStyle: {
            background: '#F9603E',
            borderRadius: 8,
            opacity: value as number,
          },
          labels: [key],
        }))}
      />
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <StackList title='Spacing'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {Object.entries(spacing).map(([key, value]) => (
          <div
            key={key}
            style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 32, fontSize: 12, color: '#888' }}>
              {key}
            </span>
            <div
              style={{
                height: 16,
                background: '#F9603E',
                borderRadius: 2,
                width: (value as number) * 2,
              }}
            />
            <span style={{ fontSize: 12 }}>{value}px</span>
          </div>
        ))}
      </div>
    </StackList>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <StackList title='Font Size'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {Object.entries(fontSize).map(([key, value]) => (
            <div
              key={key}
              style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ width: 32, fontSize: 12, color: '#888' }}>
                {key}
              </span>
              <span
                style={{
                  fontSize: value as number,
                  fontFamily: fontFamily.default as string,
                }}>
                머먹지 디자인 시스템
              </span>
              <span style={{ fontSize: 11, color: '#888' }}>{value}px</span>
            </div>
          ))}
        </div>
      </StackList>
      <StackList title='Font Weight'>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {Object.entries(fontWeight).map(([key, value]) => (
            <span
              key={key}
              style={{ fontWeight: value as number, fontSize: 16 }}>
              {key} ({value})
            </span>
          ))}
        </div>
      </StackList>
      <StackList title='Font Family'>
        <div style={{ display: 'flex', gap: 16 }}>
          {Object.entries(fontFamily).map(([key, value]) => (
            <span
              key={key}
              style={{ fontFamily: value as string, fontSize: 16 }}>
              {key}: {value as string}
            </span>
          ))}
        </div>
      </StackList>
      <StackList title='Line Height'>
        <div style={{ display: 'flex', gap: 16 }}>
          {Object.entries(lineHeight).map(([key, value]) => (
            <div
              key={key}
              style={{
                lineHeight: value as number,
                border: '1px solid #eee',
                padding: 8,
                width: 120,
              }}>
              <span style={{ fontSize: 12, color: '#888', display: 'block' }}>
                {key} ({value})
              </span>
              머먹지
              <br />
              디자인 시스템
            </div>
          ))}
        </div>
      </StackList>
    </div>
  ),
};

export const Radius: StoryObj = {
  render: () => (
    <GridList
      title='Radius'
      gap={16}
      items={Object.entries(radius).map(([key, value]) => ({
        key,
        boxStyle: {
          background: '#F9603E',
          borderRadius: value as number,
        },
        labels: [key],
      }))}
    />
  ),
};
