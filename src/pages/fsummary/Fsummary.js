import React from "react";
import styled from "styled-components";

const StyledFsummary = styled.div`
  display: flex;
  flex-direction: column;

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .title {
      font-size: 14px;
      font-weight: 500;
      color: rgba(238, 238, 238, 0.5);
      letter-spacing: 0.3px;
      text-transform: uppercase;
      text-align: center;
    }

    .contacts {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .contact {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .involvement {
            font-weight: 400;
            color: rgba(238, 238, 238, 0.5);
          }

          .lent {
            color: var(--green-color);
          }

          .borrow {
            color: var(--red-color);
          }
        }

        .bottom {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: rgba(238, 238, 238, 0.5);

          .balances {
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 6px;

            .balance {
              display: flex;
              flex-direction: row;
              gap: 8px;
            }

            .involvement {
              font-weight: 400;
              color: rgba(238, 238, 238, 0.5);
            }

            .lent {
              color: var(--green-color);
            }

            .borrow {
              color: var(--red-color);
            }
          }
        }
      }
    }
  }
`;

const Fsummary = () => {
  return (
    <StyledFsummary>
      <div className="summary">
        <div className="statement">Overall you are owed 340</div>
      </div>
      <div className="details">
        <div className="title">Outstanding Balances</div>
        <div className="contacts">
          <div className="contact">
            <div className="top">
              <div className="name">Kavya</div>
              <div className="involvement borrow">287</div>
            </div>
            <div className="bottom">
              <div className="balances">
                <div className="balance">
                  Kavya owes you
                  <div className="involvement borrow">100</div>
                  for the Prints
                </div>
                <div className="balance">
                  Kavya owes you
                  <div className="involvement lent">100</div>
                  from The Kerala Trip
                </div>
                <div className="balance">
                  You owe Kavya
                  <div className="involvement borrow">100</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="top">
              <div className="name">Rachana</div>
              <div className="involvement borrow">287</div>
            </div>
            <div className="bottom">
              <div className="balances">
                <div className="balance">
                  Rachana owes you
                  <div className="involvement borrow">100</div>
                  for the Prints
                </div>
                <div className="balance">
                  Rachnana owes you
                  <div className="involvement lent">100</div>
                  from The Kerala Trip
                </div>
                <div className="balance">
                  You owe Rachana
                  <div className="involvement borrow">100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledFsummary>
  );
};

export default Fsummary;
