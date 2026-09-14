import clsx from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardRefRenderFunction,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';
import './LinkBase.scss';

type LinkBaseOwnProps = {
  children: ReactNode;
  className?: string;
};

export type LinkBaseProps<T extends ElementType = 'a'> = LinkBaseOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof LinkBaseOwnProps | 'as'>;

type LinkBaseComponent = {
  <T extends ElementType = 'a'>(
    props: LinkBaseProps<T> & {
      ref?: ComponentPropsWithRef<T>['ref'];
    },
  ): ReactElement | null;
  displayName?: string;
};

const LinkBaseRender = <T extends ElementType = 'a'>(
  { as, className, children, ...rest }: LinkBaseProps<T>,
  ref: ComponentPropsWithRef<T>['ref'],
) => {
  const Component = (as ?? 'a') as ElementType;

  return (
    <Component
      ref={ref as Ref<never>}
      className={clsx('LinkBase', className)}
      {...rest}>
      {children}
    </Component>
  );
};

/**
 * native a, Next Link, React Router Link 등 링크 컴포넌트의 공통 기반
 */
export const LinkBase = forwardRef(
  LinkBaseRender as unknown as ForwardRefRenderFunction<
    HTMLElement,
    LinkBaseOwnProps
  >,
) as unknown as LinkBaseComponent;

LinkBase.displayName = 'LinkBase';
