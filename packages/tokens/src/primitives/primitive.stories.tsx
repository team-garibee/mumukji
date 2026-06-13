import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridList } from '../story-ui/GridList';
import { StackList } from '../story-ui/StackList';
import styles from '../story-ui/story.module.scss';
import {
  color,
  spacing,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  opacity,
  radius,
  shadow,
  zIndex,
} from './primitives';

const meta: Meta = {
  title: 'Tokens/Primitive',
  tags: ['!autodocs'],
};

export default meta;

export const Color: StoryObj = {
  name: 'Color & Opacity',
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
          {Object.entries(fontWeight).map(([key, value]) => (
            <div key={key} className={styles.fontWeightRow}>
              <span style={{ fontWeight: value, fontSize: 28 }}>
                머먹지 디자인 시스템
              </span>
              <span style={{ fontWeight: value }}>{value}</span>
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
  name: 'Shadow & Z-index',
  render: () => (
    <div className={styles.colorList}>
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
      <StackList title='Z-index'>
        <div
          style={{
            position: 'relative',
            height: Object.keys(zIndex).length * 24 + 48,
            width: 260,
          }}>
          {Object.entries(zIndex).map(([key, value], i) => (
            <div
              key={key}
              style={{
                position: 'absolute',
                top: i * 24,
                left: i * 20,
                width: 220,
                zIndex: value as number,
                background: `hsl(228, 60%, ${52 + i * 5}%)`,
                borderRadius: 8,
                padding: '10px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
              }}>
              <span>{key}</span>
              <span style={{ opacity: 0.7, fontSize: 12 }}>{value}</span>
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
