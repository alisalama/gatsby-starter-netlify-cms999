import React from 'react';
import PropTypes from 'prop-types';

// const Pricing =  => {
class Pricing extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pricing: 'monthly' };
  }
  
  selectionChanged = (e) =>  {
    this.setState({
      pricing: e.currentTarget.value,
    });
  }

  render() {

    // get the properties
    const { pricing } = this.props;

    // return the component html
    return (
      <>
        <div className="is-pricing is-feature-wave">
          <div className="hero-body mb-20">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-6 is-offset-3 is-hero-title has-text-centered">
                  <h1 className="title is-1 is-medium is-spaced">
                    {pricing.heading}
                  </h1>
                  <h2 className="subtitle is-4">
                    {pricing.description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-secondary" style={{top: '-1px'}}>
          <div className="container">
            {/* <!-- Pricing wrapper --> */}
            <div className="switch-pricing-wrapper">
              <div className="pricing-container">
                
                {/* <!-- Pricing Switcher --> */}
                <div className="pricing-switcher">
                  <p className="fieldset">
                    <input type="radio" name="duration-1" id="monthly-1"
                      value='monthly' onChange={this.selectionChanged} checked={this.state.pricing === 'monthly'}
                    />
                    <label htmlFor="monthly-1">Monthly</label>
                    <input type="radio" name="duration-1" id="yearly-1"
                      value='yearly' onChange={this.selectionChanged} checked={this.state.pricing === 'yearly'}/>
                    <label htmlFor="yearly-1">Yearly</label>
                    <span className="switch"></span>
                  </p>
                </div>

                <div className="columns is-4 tables-wrap">
                    {
                      pricing.plans.map(price => (

                        <div key={price.plan} className="column">
                          <div className="flex-card">
                            {/* <!-- Pricing image --> */}
                            <div className="pricing-image-container">
                             { (price.image && !price.image.childImageSharp && price.image.extension === 'svg') && 
                                <img src={price.image.publicURL} alt={price.plan} />
                             }
                              <div className={`plan-price is-monthly ${this.state.pricing === 'monthly' ? 'is-active' : ''}`}>
                                <span>{price.monthly_price}</span>
                              </div>
                              <div className={`plan-price is-yearly ${this.state.pricing === 'yearly' ? 'is-active' : ''}`}>
                                <span>{price.yearly_price}</span>
                              </div>
                            </div>
                            {/* <!-- Pricing plan name --> */}
                            <div className="plan-name has-text-centered">
                              <h3>{price.plan}</h3>
                              <p>{price.description}</p>
                            </div>
                            {/* <!-- Pricing plan features --> */}
                            <ul className="plan-features">
                              {price.items.map(item => (
                                <li key={item} className="">
                                  {item}
                                </li>
                              ))}
                            </ul>
                            {/* <!-- Pricing action --> */}
                            <div className="button-wrapper">
                              <a href="https://app.bluprnts.com" className="button secondary-btn is-fullwidth">Sign up</a>
                              {/* is-fullwidth raised  is-bold btn-upper */}
                            </div>
                          </div>
                        </div>
                      ))}

                </div>
              </div>
            </div>

            {/* <!-- Clients --> */}
            {/* <div className="hero-foot pt-10 pb-10">
              <div className="container">
                <div className="tabs partner-tabs is-centered">
                  <ul>
                    <li><img className="partner-logo" src="assets/images/logos/custom/covenant.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/infinite.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/kromo.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/grubspot.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/systek.svg" alt="" /></li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <!-- /Clients --> */}

          </div>
        </div>

      </>
    )
  }
}


Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      monthly_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      yearly_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  ),
}

export default Pricing

