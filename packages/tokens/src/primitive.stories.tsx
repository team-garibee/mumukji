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
import styles from './story-ui/story.module.scss';

const meta: Meta = {
  title: 'Tokens/Primitive',
  tags: ['!autodocs'],
};

export default meta;

export const Color: StoryObj = {
  name: 'Color & Opacity',
  render: () => (
    <div className={styles.colorList}>
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
      <div className={styles.spacingList}>
        {Object.entries(spacing).map(([key, value]) => (
          <div key={key} className={styles.spacingRow}>
            <span className={styles.tokenKey}>{key}</span>
            <div
              className={styles.spacingBar}
              style={{ width: (value as number) * 2 }}
            />
            <span className={styles.spacingValue}>{value}px</span>
          </div>
        ))}
      </div>
    </StackList>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div className={styles.typographyList}>
      <StackList title='Font Size'>
        <div className={styles.fontSizeList}>
          {Object.entries(fontSize).map(([key, value]) => (
            <div key={key} className={styles.fontSizeRow}>
              <span className={styles.tokenKey}>{key}</span>
              <span
                style={{
                  fontSize: value as number,
                  fontFamily: fontFamily.default as string,
                }}>
                머먹지 디자인 시스템
              </span>
              <span className={styles.tokenMeta}>{value}px</span>
            </div>
          ))}
        </div>
      </StackList>

      <StackList title='Font Weight'>
        <div className={styles.fontWeightList}>
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
        <div className={styles.fontFamilyList}>
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
        <div className={styles.lineHeightList}>
          {Object.entries(lineHeight).map(([key, value]) => (
            <div
              key={key}
              className={styles.lineHeightItem}
              style={{ lineHeight: value as number }}>
              <span className={styles.lineHeightLabel}>
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
      wide
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
