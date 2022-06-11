import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import { ClaimRewardsButtons2 } from './ClaimRewardsButtons2/ClaimRewardsButtons2';
import { ClaimRewardsButtons3 } from './ClaimRewardsButtons3/ClaimRewardsButtons3';
import { ClaimRewardsButtons4 } from './ClaimRewardsButtons4/ClaimRewardsButtons4';
import { ClaimRewardsButtons } from './ClaimRewardsButtons/ClaimRewardsButtons';
import classes from './Dashboard.module.css';
import { DepositButtons2 } from './DepositButtons2/DepositButtons2';
import { DepositButtons3 } from './DepositButtons3/DepositButtons3';
import { DepositButtons } from './DepositButtons/DepositButtons';
import { Ellipse241Icon } from './Ellipse241Icon';
import { Ellipse242Icon } from './Ellipse242Icon';
import { Ellipse243Icon } from './Ellipse243Icon';
import { Ellipse244Icon } from './Ellipse244Icon';
import { Ellipse245Icon } from './Ellipse245Icon';
import { Ellipse246Icon } from './Ellipse246Icon';
import { Ellipse285Icon } from './Ellipse285Icon';
import { Ellipse286Icon } from './Ellipse286Icon';
import { Ellipse287Icon } from './Ellipse287Icon';
import { Ellipse287Icon2 } from './Ellipse287Icon2';
import { Ellipse287Icon3 } from './Ellipse287Icon3';
import { Ellipse287Icon4 } from './Ellipse287Icon4';
import { Ellipse287Icon5 } from './Ellipse287Icon5';
import { Ellipse287Icon6 } from './Ellipse287Icon6';
import { Ellipse287Icon7 } from './Ellipse287Icon7';
import { Ellipse287Icon8 } from './Ellipse287Icon8';
import { Ellipse300Icon } from './Ellipse300Icon';
import { Ellipse301Icon } from './Ellipse301Icon';
import { Ellipse303Icon } from './Ellipse303Icon';
import { Ellipse304Icon } from './Ellipse304Icon';
import { Group3004Icon } from './Group3004Icon';
import { Group3005Icon } from './Group3005Icon';
import { Group3055Icon } from './Group3055Icon';
import { Line73Icon } from './Line73Icon';
import { Line75Icon } from './Line75Icon';
import { Line76Icon } from './Line76Icon';
import { Line76Icon2 } from './Line76Icon2';
import { Line78Icon } from './Line78Icon';
import { Line80Icon } from './Line80Icon';
import { Line81Icon } from './Line81Icon';
import { Line82Icon } from './Line82Icon';
import { Line85Icon } from './Line85Icon';
import { Line86Icon } from './Line86Icon';
import { Line87Icon } from './Line87Icon';
import { Line88Icon } from './Line88Icon';
import { PurchaseButtons } from './PurchaseButtons/PurchaseButtons';
import { Rectangle22664Icon } from './Rectangle22664Icon';
import { Rectangle22665Icon } from './Rectangle22665Icon';
import { Rectangle22704Icon } from './Rectangle22704Icon';
import { RedeemButtons } from './RedeemButtons/RedeemButtons';
import { Topology1Icon } from './Topology1Icon';
import { VectorIcon } from './VectorIcon';
import { WithdrawButtons2 } from './WithdrawButtons2/WithdrawButtons2';
import { WithdrawButtons3 } from './WithdrawButtons3/WithdrawButtons3';
import { WithdrawButtons } from './WithdrawButtons/WithdrawButtons';

interface Props {
  className?: string;
  classes?: {
    topology1?: string;
    group3055?: string;
    rectangle22665?: string;
    line82?: string;
    boardroom?: string;
    bshares?: string;
    bshares2?: string;
    yourStake6000117162?: string;
    earned1660441329888?: string;
    bomb?: string;
    stakeBSHAREAndEarnBOMBEveryEpo?: string;
    dailyReturns2?: string;
    rectangle22674?: string;
    ellipse287?: string;
    bbond?: string;
    currentEpoch258?: string;
    _33836NextEpochIn?: string;
    line75?: string;
    line81?: string;
    line85?: string;
    line86?: string;
    line87?: string;
    line88?: string;
    line76?: string;
    unity?: string;
    ellipse2872?: string;
    bshares3?: string;
    unity2?: string;
    unity3?: string;
    unity4?: string;
    unity5?: string;
    wMetaMask?: string;
    unity6?: string;
    unity7?: string;
    unity8?: string;
    unity9?: string;
    wMetaMask2?: string;
    lastEpochTWAP122?: string;
    unitePriceTWAP?: string;
    tVL502412?: string;
    wMetaMask3?: string;
    unity10?: string;
    unity11?: string;
    unity12?: string;
    ellipse300?: string;
    ellipse241?: string;
    ellipse244?: string;
    ellipse245?: string;
    ellipse246?: string;
    ellipse242?: string;
    ellipse243?: string;
    ellipse301?: string;
    _1045122?: string;
    _20?: string;
    _17?: string;
    _172?: string;
    _12?: string;
    _173?: string;
    _174?: string;
    bomb2?: string;
    ellipse285?: string;
    ellipse286?: string;
    ellipse2873?: string;
    bomb3?: string;
    ellipse2874?: string;
    bshares4?: string;
    bBond?: string;
    group3005?: string;
    bbond2?: string;
    bombBTCB?: string;
    group3004?: string;
    others?: string;
    bshareBNB?: string;
    bshareBnbLP?: string;
    bShare?: string;
    bombFinanceSummary?: string;
    rectangle22703?: string;
    frame540?: string;
    recommended?: string;
    totalStaked7232?: string;
    bshares5?: string;
    frame679?: string;
    readInvestmentStrategy?: string;
    vector?: string;
    rectangle22664?: string;
    line73?: string;
    line78?: string;
    line762?: string;
    stakeYourLPTokensInOurFarmsToS?: string;
    bombFarms?: string;
    bOMBBTCB?: string;
    bombBitcoinLP?: string;
    bshares6?: string;
    earned6441329888?: string;
    bombBitcoinLP2?: string;
    yourStake12421117162?: string;
    dailyReturns22?: string;
    tVL108430?: string;
    bshares7?: string;
    earned64413298882?: string;
    bshareBnbLP2?: string;
    yourStake124211171622?: string;
    dailyReturns23?: string;
    tVL1084302?: string;
    bSHAREBNB?: string;
    bshareBnbLP3?: string;
    rectangle22704?: string;
    rectangle22705?: string;
    frame671?: string;
    recommended2?: string;
    frame672?: string;
    recommended3?: string;
    ellipse2875?: string;
    bshares8?: string;
    ellipse2876?: string;
    bshares9?: string;
    ellipse2877?: string;
    bshares10?: string;
    rectangle537?: string;
    bBONDCanBePurchasedOnlyOnContr?: string;
    line80?: string;
    bonds?: string;
    bombIsOverPeg?: string;
    bBond62872BTCB?: string;
    currentPriceUnite2?: string;
    purchaseBBond?: string;
    redeemBomb?: string;
    availableToRedeem?: string;
    _456?: string;
    bbond3?: string;
    bbond4?: string;
    frame677?: string;
    rectangle22708?: string;
    latestNews?: string;
    unity13?: string;
    unity14?: string;
    unity15?: string;
    rectangle404?: string;
    chatOnDiscord?: string;
    ellipse303?: string;
    pw49459141?: string;
    rectangle405?: string;
    readDocs?: string;
    ellipse304?: string;
    ww29911061?: string;
    rectangle22701?: string;
    rectangle22702?: string;
    investNow?: string;
    tVL1084303?: string;
    rectangle539?: string;
    bomb4?: string;
    bombBitcoinLP3?: string;
    ellipse2878?: string;
    bshares11?: string;
  };
}
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Topology1Icon className={`${classes.topology1} ${props.classes?.topology1 || ''}`} />
      <Group3055Icon className={`${classes.group3055} ${props.classes?.group3055 || ''}`} />
      <Rectangle22665Icon className={`${classes.rectangle22665} ${props.classes?.rectangle22665 || ''}`} />
      <Line82Icon className={`${classes.line82} ${props.classes?.line82 || ''}`} />
      <div className={`${classes.boardroom} ${props.classes?.boardroom || ''}`}>Boardroom</div>
      <div className={`${classes.bshares} ${props.classes?.bshares || ''}`}></div>
      <div className={`${classes.bshares2} ${props.classes?.bshares2 || ''}`}></div>
      <div className={`${classes.yourStake6000117162} ${props.classes?.yourStake6000117162 || ''}`}>
        <span className={classes.labelWrapper}>
          <span className={classes.label}>
            Your Stake: <br />{' '}
          </span>
          <span className={classes.label2}>
            6.0000
            <br />
          </span>
          <span className={classes.label3}>≈ $1171.62</span>
        </span>
      </div>
      <div className={`${classes.earned1660441329888} ${props.classes?.earned1660441329888 || ''}`}>
        <span className={classes.labelWrapper2}>
          <span className={classes.label4}>
            Earned: <br />{' '}
          </span>
          <span className={classes.label5}>
            1660.4413 <br />
          </span>
          <span className={classes.label6}>≈ $298.88</span>
        </span>
      </div>
      <div className={`${classes.bomb} ${props.classes?.bomb || ''}`}></div>
      <div
        className={`${classes.stakeBSHAREAndEarnBOMBEveryEpo} ${props.classes?.stakeBSHAREAndEarnBOMBEveryEpo || ''}`}
      >
        Stake BSHARE and earn BOMB every epoch
      </div>
      <WithdrawButtons />
      <DepositButtons />
      <div className={`${classes.dailyReturns2} ${props.classes?.dailyReturns2 || ''}`}>
        <span className={classes.labelWrapper3}>
          <span className={classes.label7}>
            Daily Returns:
            <br />
          </span>
          <span className={classes.label8}>2%</span>
          <span className={classes.label9}>
            {' '}
            <br />
          </span>
        </span>
      </div>
      <div className={`${classes.rectangle22674} ${props.classes?.rectangle22674 || ''}`}></div>
      <Ellipse287Icon className={`${classes.ellipse287} ${props.classes?.ellipse287 || ''}`} />
      <div className={`${classes.bbond} ${props.classes?.bbond || ''}`}></div>
      <div className={`${classes.currentEpoch258} ${props.classes?.currentEpoch258 || ''}`}>
        <span className={classes.labelWrapper4}>
          <span className={classes.label10}>
            Current Epoch
            <br />
          </span>
          <span className={classes.label11}>258</span>
        </span>
      </div>
      <div className={`${classes._33836NextEpochIn} ${props.classes?._33836NextEpochIn || ''}`}>
        <span className={classes.labelWrapper5}>
          <span className={classes.label12}>
            03:38:36
            <br />
          </span>
          <span className={classes.label13}>Next Epoch in</span>
        </span>
      </div>
      <Line75Icon className={`${classes.line75} ${props.classes?.line75 || ''}`} />
      <Line81Icon className={`${classes.line81} ${props.classes?.line81 || ''}`} />
      <Line85Icon className={`${classes.line85} ${props.classes?.line85 || ''}`} />
      <Line86Icon className={`${classes.line86} ${props.classes?.line86 || ''}`} />
      <Line87Icon className={`${classes.line87} ${props.classes?.line87 || ''}`} />
      <Line88Icon className={`${classes.line88} ${props.classes?.line88 || ''}`} />
      <Line76Icon className={`${classes.line76} ${props.classes?.line76 || ''}`} />
      <div className={`${classes.unity} ${props.classes?.unity || ''}`}>$BOMB</div>
      <Ellipse287Icon2 className={`${classes.ellipse2872} ${props.classes?.ellipse2872 || ''}`} />
      <div className={`${classes.bshares3} ${props.classes?.bshares3 || ''}`}></div>
      <div className={`${classes.unity2} ${props.classes?.unity2 || ''}`}>$BSHARE</div>
      <div className={`${classes.unity3} ${props.classes?.unity3 || ''}`}>11.43K</div>
      <div className={`${classes.unity4} ${props.classes?.unity4 || ''}`}>8.49m</div>
      <div className={`${classes.unity5} ${props.classes?.unity5 || ''}`}>
        $300
        <br />
        13000 BTCB
      </div>
      <div className={`${classes.wMetaMask} ${props.classes?.wMetaMask || ''}`}></div>
      <div className={`${classes.unity6} ${props.classes?.unity6 || ''}`}>$BBOND</div>
      <div className={`${classes.unity7} ${props.classes?.unity7 || ''}`}>20.00K</div>
      <div className={`${classes.unity8} ${props.classes?.unity8 || ''}`}>175k</div>
      <div className={`${classes.unity9} ${props.classes?.unity9 || ''}`}>
        $0.28
        <br />
        1.15 BTCB
      </div>
      <div className={`${classes.wMetaMask2} ${props.classes?.wMetaMask2 || ''}`}></div>
      <div className={`${classes.lastEpochTWAP122} ${props.classes?.lastEpochTWAP122 || ''}`}>
        <span className={classes.labelWrapper6}>
          <span className={classes.label14}>Last Epoch TWAP:</span>
          <span className={classes.label15}> </span>
          <span className={classes.label16}>1.22</span>
        </span>
      </div>
      <div className={`${classes.unitePriceTWAP} ${props.classes?.unitePriceTWAP || ''}`}>
        <span className={classes.labelWrapper7}>
          <span className={classes.label17}>Live TWAP:</span>
          <span className={classes.label18}> </span>
          <span className={classes.label19}>1.17</span>
        </span>
      </div>
      <div className={`${classes.tVL502412} ${props.classes?.tVL502412 || ''}`}>
        <span className={classes.labelWrapper8}>
          <span className={classes.label20}>TVL:</span>
          <span className={classes.label21}> </span>
          <span className={classes.label22}>$5,002,412</span>
        </span>
      </div>
      <div className={`${classes.wMetaMask3} ${props.classes?.wMetaMask3 || ''}`}></div>
      <div className={`${classes.unity10} ${props.classes?.unity10 || ''}`}>
        $0.24 <br />
        1.05 BTCB
      </div>
      <div className={`${classes.unity11} ${props.classes?.unity11 || ''}`}>8.66M</div>
      <div className={`${classes.unity12} ${props.classes?.unity12 || ''}`}> 60.9k</div>
      <Ellipse300Icon className={`${classes.ellipse300} ${props.classes?.ellipse300 || ''}`} />
      <Ellipse241Icon className={`${classes.ellipse241} ${props.classes?.ellipse241 || ''}`} />
      <Ellipse244Icon className={`${classes.ellipse244} ${props.classes?.ellipse244 || ''}`} />
      <Ellipse245Icon className={`${classes.ellipse245} ${props.classes?.ellipse245 || ''}`} />
      <Ellipse246Icon className={`${classes.ellipse246} ${props.classes?.ellipse246 || ''}`} />
      <Ellipse242Icon className={`${classes.ellipse242} ${props.classes?.ellipse242 || ''}`} />
      <Ellipse243Icon className={`${classes.ellipse243} ${props.classes?.ellipse243 || ''}`} />
      <Ellipse301Icon className={`${classes.ellipse301} ${props.classes?.ellipse301 || ''}`} />
      <div className={`${classes._1045122} ${props.classes?._1045122 || ''}`}>
        <span className={classes.labelWrapper9}>
          <span className={classes.label23}>$10,451</span>
          <span className={classes.label24}>
            {' '}
            <br />
          </span>
          <span className={classes.label25}>+22%</span>
          <span className={classes.label26}> </span>
        </span>
      </div>
      <div className={`${classes._20} ${props.classes?._20 || ''}`}>20%</div>
      <div className={`${classes._17} ${props.classes?._17 || ''}`}>17%</div>
      <div className={`${classes._172} ${props.classes?._172 || ''}`}>17%</div>
      <div className={`${classes._12} ${props.classes?._12 || ''}`}>12%</div>
      <div className={`${classes._173} ${props.classes?._173 || ''}`}>17%</div>
      <div className={`${classes._174} ${props.classes?._174 || ''}`}>17%</div>
      <div className={`${classes.bomb2} ${props.classes?.bomb2 || ''}`}>Bomb:</div>
      <Ellipse285Icon className={`${classes.ellipse285} ${props.classes?.ellipse285 || ''}`} />
      <Ellipse286Icon className={`${classes.ellipse286} ${props.classes?.ellipse286 || ''}`} />
      <Ellipse287Icon3 className={`${classes.ellipse2873} ${props.classes?.ellipse2873 || ''}`} />
      <div className={`${classes.bomb3} ${props.classes?.bomb3 || ''}`}></div>
      <Ellipse287Icon4 className={`${classes.ellipse2874} ${props.classes?.ellipse2874 || ''}`} />
      <div className={`${classes.bshares4} ${props.classes?.bshares4 || ''}`}></div>
      <div className={`${classes.bBond} ${props.classes?.bBond || ''}`}>BBond:</div>
      <Group3005Icon className={`${classes.group3005} ${props.classes?.group3005 || ''}`} />
      <div className={`${classes.bbond2} ${props.classes?.bbond2 || ''}`}></div>
      <div className={`${classes.bombBTCB} ${props.classes?.bombBTCB || ''}`}>Bomb-BTCB:</div>
      <Group3004Icon className={`${classes.group3004} ${props.classes?.group3004 || ''}`} />
      <div className={`${classes.others} ${props.classes?.others || ''}`}>Others:</div>
      <div className={`${classes.bshareBNB} ${props.classes?.bshareBNB || ''}`}>Bshare-BNB:</div>
      <div className={`${classes.bshareBnbLP} ${props.classes?.bshareBnbLP || ''}`}></div>
      <div className={`${classes.bShare} ${props.classes?.bShare || ''}`}>BShare:</div>
      <div className={`${classes.bombFinanceSummary} ${props.classes?.bombFinanceSummary || ''}`}>
        Bomb Finance Summary
      </div>
      <div className={`${classes.rectangle22703} ${props.classes?.rectangle22703 || ''}`}></div>
      <div className={`${classes.frame540} ${props.classes?.frame540 || ''}`}>
        <div className={`${classes.recommended} ${props.classes?.recommended || ''}`}>Recommended</div>
      </div>
      <div className={`${classes.totalStaked7232} ${props.classes?.totalStaked7232 || ''}`}>
        <span className={classes.labelWrapper10}>
          <span className={classes.label27}>Total Staked: </span>
          <span className={classes.label28}>7232</span>
        </span>
      </div>
      <div className={`${classes.bshares5} ${props.classes?.bshares5 || ''}`}></div>
      <div className={`${classes.frame679} ${props.classes?.frame679 || ''}`}>
        <div className={`${classes.readInvestmentStrategy} ${props.classes?.readInvestmentStrategy || ''}`}>
          Read Investment Strategy
        </div>
        <VectorIcon className={`${classes.vector} ${props.classes?.vector || ''}`} />
      </div>
      <Rectangle22664Icon className={`${classes.rectangle22664} ${props.classes?.rectangle22664 || ''}`} />
      <Line73Icon className={`${classes.line73} ${props.classes?.line73 || ''}`} />
      <Line78Icon className={`${classes.line78} ${props.classes?.line78 || ''}`} />
      <Line76Icon2 className={`${classes.line762} ${props.classes?.line762 || ''}`} />
      <div
        className={`${classes.stakeYourLPTokensInOurFarmsToS} ${props.classes?.stakeYourLPTokensInOurFarmsToS || ''}`}
      >
        Stake your LP tokens in our farms to start earning $BSHARE
      </div>
      <div className={`${classes.bombFarms} ${props.classes?.bombFarms || ''}`}>Bomb Farms</div>
      <div className={`${classes.bOMBBTCB} ${props.classes?.bOMBBTCB || ''}`}>BOMB-BTCB </div>
      <div className={`${classes.bombBitcoinLP} ${props.classes?.bombBitcoinLP || ''}`}></div>
      <div className={`${classes.bshares6} ${props.classes?.bshares6 || ''}`}></div>
      <div className={`${classes.earned6441329888} ${props.classes?.earned6441329888 || ''}`}>
        <span className={classes.labelWrapper11}>
          <span className={classes.label29}>
            Earned: <br />{' '}
          </span>
          <span className={classes.label30}>
            6.4413 <br />≈ $298.88
          </span>
        </span>
      </div>
      <div className={`${classes.bombBitcoinLP2} ${props.classes?.bombBitcoinLP2 || ''}`}></div>
      <div className={`${classes.yourStake12421117162} ${props.classes?.yourStake12421117162 || ''}`}>
        <span className={classes.labelWrapper12}>
          <span className={classes.label31}>
            Your Stake
            <br />{' '}
          </span>
          <span className={classes.label32}>
            124.21 <br />≈ $1171.62
          </span>
        </span>
      </div>
      <div className={`${classes.dailyReturns22} ${props.classes?.dailyReturns22 || ''}`}>
        <span className={classes.labelWrapper13}>
          <span className={classes.label33}>
            Daily Returns: <br />
          </span>
          <span className={classes.label34}>2%</span>
          <span className={classes.label35}>
            {' '}
            <br />
          </span>
        </span>
      </div>
      <div className={`${classes.tVL108430} ${props.classes?.tVL108430 || ''}`}>
        <span className={classes.labelWrapper14}>
          <span className={classes.label36}>TVL: </span>
          <span className={classes.label37}>$1,008,430</span>
        </span>
      </div>
      <ClaimRewardsButtons />
      <ClaimRewardsButtons2 />
      <WithdrawButtons2 />
      <DepositButtons2 />
      <div className={`${classes.bshares7} ${props.classes?.bshares7 || ''}`}></div>
      <div className={`${classes.earned64413298882} ${props.classes?.earned64413298882 || ''}`}>
        <span className={classes.labelWrapper15}>
          <span className={classes.label38}>
            Earned: <br />{' '}
          </span>
          <span className={classes.label39}>
            6.4413 <br />≈ $298.88
          </span>
        </span>
      </div>
      <div className={`${classes.bshareBnbLP2} ${props.classes?.bshareBnbLP2 || ''}`}></div>
      <div className={`${classes.yourStake124211171622} ${props.classes?.yourStake124211171622 || ''}`}>
        <span className={classes.labelWrapper16}>
          <span className={classes.label40}>
            Your Stake
            <br />{' '}
          </span>
          <span className={classes.label41}>
            124.21 <br />≈ $1171.62
          </span>
        </span>
      </div>
      <div className={`${classes.dailyReturns23} ${props.classes?.dailyReturns23 || ''}`}>
        <span className={classes.labelWrapper17}>
          <span className={classes.label42}>
            Daily Returns: <br />
          </span>
          <span className={classes.label43}>
            2% <br />
          </span>
        </span>
      </div>
      <div className={`${classes.tVL1084302} ${props.classes?.tVL1084302 || ''}`}>
        <span className={classes.labelWrapper18}>
          <span className={classes.label44}>TVL: </span>
          <span className={classes.label45}>$1,008,430</span>
        </span>
      </div>
      <ClaimRewardsButtons3 />
      <WithdrawButtons3 />
      <div className={`${classes.bSHAREBNB} ${props.classes?.bSHAREBNB || ''}`}>BSHARE-BNB</div>
      <div className={`${classes.bshareBnbLP3} ${props.classes?.bshareBnbLP3 || ''}`}></div>
      <Rectangle22704Icon className={`${classes.rectangle22704} ${props.classes?.rectangle22704 || ''}`} />
      <div className={`${classes.rectangle22705} ${props.classes?.rectangle22705 || ''}`}></div>
      <div className={`${classes.frame671} ${props.classes?.frame671 || ''}`}>
        <div className={`${classes.recommended2} ${props.classes?.recommended2 || ''}`}>Recommended</div>
      </div>
      <div className={`${classes.frame672} ${props.classes?.frame672 || ''}`}>
        <div className={`${classes.recommended3} ${props.classes?.recommended3 || ''}`}>Recommended</div>
      </div>
      <DepositButtons3 />
      <Ellipse287Icon5 className={`${classes.ellipse2875} ${props.classes?.ellipse2875 || ''}`} />
      <div className={`${classes.bshares8} ${props.classes?.bshares8 || ''}`}></div>
      <Ellipse287Icon6 className={`${classes.ellipse2876} ${props.classes?.ellipse2876 || ''}`} />
      <div className={`${classes.bshares9} ${props.classes?.bshares9 || ''}`}></div>
      <Ellipse287Icon7 className={`${classes.ellipse2877} ${props.classes?.ellipse2877 || ''}`} />
      <div className={`${classes.bshares10} ${props.classes?.bshares10 || ''}`}></div>
      <div className={`${classes.rectangle537} ${props.classes?.rectangle537 || ''}`}></div>
      <div
        className={`${classes.bBONDCanBePurchasedOnlyOnContr} ${props.classes?.bBONDCanBePurchasedOnlyOnContr || ''}`}
      >
        BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
      </div>
      <Line80Icon className={`${classes.line80} ${props.classes?.line80 || ''}`} />
      <div className={`${classes.bonds} ${props.classes?.bonds || ''}`}>Bonds </div>
      <div className={`${classes.bombIsOverPeg} ${props.classes?.bombIsOverPeg || ''}`}>Bomb is over peg</div>
      <div className={`${classes.bBond62872BTCB} ${props.classes?.bBond62872BTCB || ''}`}>BBond = 6.2872 BTCB</div>
      <div className={`${classes.currentPriceUnite2} ${props.classes?.currentPriceUnite2 || ''}`}>
        Current Price: (Bomb)^2
      </div>
      <div className={`${classes.purchaseBBond} ${props.classes?.purchaseBBond || ''}`}>Purchase BBond</div>
      <div className={`${classes.redeemBomb} ${props.classes?.redeemBomb || ''}`}>Redeem Bomb</div>
      <PurchaseButtons />
      <RedeemButtons />
      <div className={`${classes.availableToRedeem} ${props.classes?.availableToRedeem || ''}`}>
        Available to redeem:{' '}
      </div>
      <div className={`${classes._456} ${props.classes?._456 || ''}`}>456</div>
      <div className={`${classes.bbond3} ${props.classes?.bbond3 || ''}`}></div>
      <div className={`${classes.bbond4} ${props.classes?.bbond4 || ''}`}></div>
      <div className={`${classes.frame677} ${props.classes?.frame677 || ''}`}>
        <div className={`${classes.rectangle22708} ${props.classes?.rectangle22708 || ''}`}></div>
        <div className={`${classes.latestNews} ${props.classes?.latestNews || ''}`}>Latest News</div>
      </div>
      <div className={`${classes.unity13} ${props.classes?.unity13 || ''}`}>Price</div>
      <div className={`${classes.unity14} ${props.classes?.unity14 || ''}`}>Current Supply</div>
      <div className={`${classes.unity15} ${props.classes?.unity15 || ''}`}>Total Supply</div>
      <div className={`${classes.rectangle404} ${props.classes?.rectangle404 || ''}`}></div>
      <div className={`${classes.chatOnDiscord} ${props.classes?.chatOnDiscord || ''}`}>Chat on Discord</div>
      <Ellipse303Icon className={`${classes.ellipse303} ${props.classes?.ellipse303 || ''}`} />
      <div className={`${classes.pw49459141} ${props.classes?.pw49459141 || ''}`}></div>
      <div className={`${classes.rectangle405} ${props.classes?.rectangle405 || ''}`}></div>
      <div className={`${classes.readDocs} ${props.classes?.readDocs || ''}`}>Read Docs</div>
      <Ellipse304Icon className={`${classes.ellipse304} ${props.classes?.ellipse304 || ''}`} />
      <div className={`${classes.ww29911061} ${props.classes?.ww29911061 || ''}`}></div>
      <div className={`${classes.rectangle22701} ${props.classes?.rectangle22701 || ''}`}></div>
      <div className={`${classes.rectangle22702} ${props.classes?.rectangle22702 || ''}`}></div>
      <div className={`${classes.investNow} ${props.classes?.investNow || ''}`}>Invest Now</div>
      <div className={`${classes.tVL1084303} ${props.classes?.tVL1084303 || ''}`}>
        <span className={classes.labelWrapper19}>
          <span className={classes.label46}>TVL: </span>
          <span className={classes.label47}>$1,008,430</span>
        </span>
      </div>
      <ClaimRewardsButtons4 />
      <div className={`${classes.rectangle539} ${props.classes?.rectangle539 || ''}`}></div>
      <div className={`${classes.bomb4} ${props.classes?.bomb4 || ''}`}></div>
      <div className={`${classes.bombBitcoinLP3} ${props.classes?.bombBitcoinLP3 || ''}`}></div>
      <Ellipse287Icon8 className={`${classes.ellipse2878} ${props.classes?.ellipse2878 || ''}`} />
      <div className={`${classes.bshares11} ${props.classes?.bshares11 || ''}`}></div>
    </div>
  );
});
