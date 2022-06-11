import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import { IconShoppingCartIcon } from './IconShoppingCartIcon';
import classes from './PurchaseButtons.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    purchase?: string;
    group2945?: string;
    vector?: string;
    iconShoppingCart?: string;
  };
}
export const PurchaseButtons: FC<Props> = memo(function PurchaseButtons(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.purchase} ${props.classes?.purchase || ''}`}>Purchase</div>
      <div className={`${classes.group2945} ${props.classes?.group2945 || ''}`}>
        <VectorIcon className={`${classes.vector} ${props.classes?.vector || ''}`} />
        <IconShoppingCartIcon className={`${classes.iconShoppingCart} ${props.classes?.iconShoppingCart || ''}`} />
      </div>
    </button>
  );
});
