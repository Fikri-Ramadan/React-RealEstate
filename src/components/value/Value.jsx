import {
  Accordion,
  AccordionItemButton,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from 'react-icons/md';

import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth v-container">
        <div className="v-left">
          <div className="v-image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem`}
                  uuid={i}
                  key={i}
                  activeClassName="accordionItem expanded"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <div className="icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default Value;
