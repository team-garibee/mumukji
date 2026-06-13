import styles from './story.module.scss';

interface TypoTokenCardProps {
  name: string;
  description: string;
  fontSize: { primitive: string; value: number };
  fontWeight: { primitive: string; value: number; label: string };
  lineHeight: { key: string; value: number };
  sampleText?: string;
}

export function TypoTokenCard({
  name,
  description,
  fontSize,
  fontWeight,
  lineHeight,
  sampleText = '머먹을지 안 정했어?\n랜덤으로 추천해줄게',
}: TypoTokenCardProps) {
  return (
    <div className={styles.typoCard}>
      <div className={styles.typoCardHeader}>
        <p className={styles.typoCardName}>{name}</p>
        <p className={styles.typoCardDescription}>{description}</p>
      </div>
      <div className={styles.typoCardBody}>
        <div className={styles.typoCardPreview}>
          <span
            className={styles.sampleText}
            style={{
              fontSize: fontSize.value,
              fontWeight: fontWeight.value,
              lineHeight: lineHeight.value,
              whiteSpace: 'pre-line',
            }}>
            {sampleText}
          </span>
        </div>
        <table className={styles.typoCardTable}>
          <thead>
            <tr>
              <th>속성</th>
              <th>Primitives</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>font-size</td>
              <td>{fontSize.primitive}</td>
              <td>{fontSize.value}px</td>
            </tr>
            <tr>
              <td>font-weight</td>
              <td>{fontWeight.primitive}</td>
              <td>
                {fontWeight.value} ({fontWeight.label})
              </td>
            </tr>
            <tr>
              <td>line-height</td>
              <td>{lineHeight.key}</td>
              <td>{lineHeight.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
