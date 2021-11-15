import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGiftCard: null
    };
  }

  onGiftCardSelect(giftcard) {
    this.setState({ selectedGiftCard: giftcard });
  }
  renderSelectedGiftCard(giftcard) {
    if (giftcard) {
      return (
        <card>
          <CardImg top src={giftcard.image} alt={giftcard.name} />
          <CardBody>
            <CardTitle>{giftcard.name}</CardTitle>
            <CardText>{giftcard.description}</CardText>
          </CardBody>
        </card>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.giftcards.map(giftcard => {
      return (
        <div key={giftcard.id} className="col-md-5 m-1">
          <Card onClick={() => this.onGiftCardSelect(giftcard)}>
            <CardImg width="100%" src={giftcard.image} alt={giftcard.name} />
            <CardImgOverlay>
              <CardTitle>{giftcard.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedGiftCard(this.state.selectedGiftCard)}
          </div>
        </div>
      </div>
    );
  }
}
export default Directory;
