import { Button } from 'antd';
import NumberFormat from '@components/common/layout/numberformat';
import './token-card.less';
import React from 'react';
import { connect } from 'react-redux';

interface IProps {
  name: string;
  token: number;
  price: number;
  onBuyToken?: Function;
  buying?: boolean;
  currencySymbol?: string;
}

const TokenCard = ({
  token, price, buying, currencySymbol, ...props
}: IProps) => (
  <div className="token-card">
    <div className="card-image">
      <div className="coin">
        <div className="current-coin">
          <img src="/crown.png" alt="" />
          <span>
            x
            {token}
          </span>
        </div>
      </div>
    </div>
    {/* <NumberFormat value={}/> */}
    <NumberFormat value={token} suffix=" Token for " />
    <NumberFormat value={price} prefix={currencySymbol} />
    <br />
    <Button
      type="primary"
      onClick={() => props.onBuyToken()}
      loading={buying}
      disabled={buying}
    >
      Buy Now
    </Button>
  </div>
);
TokenCard.defaultProps = {
  onBuyToken: null,
  buying: false,
  currencySymbol: '$'
};

const mapStateToProps = (state : any) => ({
  ...state.ui
});
export default connect(mapStateToProps)(TokenCard);
