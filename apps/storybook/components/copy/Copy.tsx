import { IconCopy } from '@mumukji/icons';
import { type ReactNode, useState } from 'react';
import styles from './Copy.module.css';

interface CopyProps {
  /** 클립보드에 복사할 텍스트 */
  copyText: string;
  /** 클릭 영역으로 감쌀 콘텐츠 */
  children: ReactNode;
}

/**
 * ## Copy
 * 클릭 시 `copyText`를 클립보드에 복사하는 스토리북 내부 유틸 컴포넌트.
 * @internal
 */
const Copy = ({ copyText, children }: CopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('복사 실패:', e);
    }
  };

  return (
    <div onClick={handleCopy} className={styles.wrapper}>
      {children}

      {/* TODO: hover 시 표시할 copy 아이콘 — SVG 또는 React 컴포넌트로 교체 */}
      <span className={styles.iconOverlay}>
        <IconCopy color='white' />
      </span>
      {copied && <span className={styles.copiedBadge}>복사완료!</span>}
    </div>
  );
};

export default Copy;
