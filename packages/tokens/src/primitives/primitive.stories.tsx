import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridList } from '../story-ui/GridList';
import { StackList } from '../story-ui/StackList';
import styles from '../story-ui/story.module.scss';
import {
  color,
  spacing,
  fontSize,
  fontFamily,
  lineHeight,
  opacity,
  radius,
  shadow,
} from './primitives';

const meta: Meta = {
  title: 'Tokens/Primitive',
  tags: ['!autodocs'],
};

export default meta;

export const Color: StoryObj = {
  render: () => (
    <div className={styles.colorList}>
      {Object.entries(color).flatMap(([groupName, shades]) => {
        const firstValue = Object.values(shades)[0];
        if (typeof firstValue === 'object' && firstValue !== null) {
          return Object.entries(
            shades as Record<string, Record<string, string>>,
          ).map(([subName, subShades]) => {
            const firstColor = Object.values(subShades)[0] ?? '';
            const isDarkBg = firstColor.includes('255, 255, 255');
            return (
              <GridList
                key={`${groupName}-${subName}`}
                title={`${groupName} / ${subName}`}
                items={Object.entries(subShades).map(([shade, value]) => ({
                  key: shade,
                  boxStyle: {
                    backgroundImage: isDarkBg
                      ? `linear-gradient(${value}, ${value})`
                      : undefined,
                    backgroundColor: isDarkBg ? '#1a1a1a' : value,
                    borderRadius: 8,
                    border: '1px solid #eee',
                  },
                  labels: [shade, value],
                }))}
              />
            );
          });
        }
        return [
          <GridList
            key={groupName}
            title={groupName}
            items={Object.entries(shades as Record<string, string>).map(
              ([shade, value]) => ({
                key: shade,
                boxStyle: {
                  background: value,
                  borderRadius: 8,
                  border: '1px solid #eee',
                },
                labels: [shade, value],
              }),
            )}
          />,
        ];
      })}
    </div>
  ),
};

export const Opacity: StoryObj = {
  render: () => (
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
              <span className={styles.tokenKey}>{value}px</span>
              <span
                className={styles.sampleText}
                style={{ fontSize: value as number, fontWeight: 600 }}>
                머먹지 디자인 시스템
              </span>
            </div>
          ))}
        </div>
      </StackList>

      <StackList title='Font Weight'>
        <div className={styles.fontWeightList}>
          {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
            <div key={weight} className={styles.fontWeightRow}>
              <span style={{ fontWeight: weight, fontSize: 28 }}>
                머먹지 디자인 시스템
              </span>
              <span style={{ fontWeight: weight }}>{weight}</span>
            </div>
          ))}
        </div>
      </StackList>

      <StackList title='Font Family'>
        <div className={styles.fontFamilyList}>
          {Object.entries(fontFamily).map(([key, value]) => (
            <span
              key={key}
              className={styles.sampleText}
              style={{ fontSize: 16 }}>
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
              <span className={styles.sampleText}>
                머먹지
                <br />
                디자인 시스템
              </span>
            </div>
          ))}
        </div>
      </StackList>
    </div>
  ),
};

export const Shadow: StoryObj = {
  render: () => (
    <GridList
      title='Shadow'
      wide
      items={Object.entries(shadow).map(([key, value]) => ({
        key,
        boxStyle: {
          background: '#ffffff',
          borderRadius: 8,
          boxShadow: value as string,
        },
        labels: [key],
      }))}
    />
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
