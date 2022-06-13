import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';
import classes from './WithdrawButtons3.module.css';

import WithdrawModal from '../../Stake/components/WithdrawModal';

import useWithdrawFromBomb from '../../../hooks/useWithdrawFromBomb';
import useModal from '../../../hooks/useModal';
import useTokenBalance from '../../../hooks/useTokenBalance';

import useBombFinance from '../../../hooks/useBombFinance';
interface Props {
  className?: string;
  classes?: {
    withdraw?: string;
    iconArrowDownCircle?: string;
  };
}
export const WithdrawButtons3: FC<Props> = memo(function WithdrawButtons3(props = {}) {
  const { onWithdraw } = useWithdrawFromBomb();
  const bombFinance = useBombFinance();
  const stakedBalance = useTokenBalance(bombFinance.XBOMB);
  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={(value) => {
        onWithdraw(value);
        onDismissWithdraw();
      }}
      tokenName={'BOMB'}
    />,
  );
  return (
    <button onClick={onPresentWithdraw} className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.withdraw} ${props.classes?.withdraw || ''}`}>Withdraw</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});
