import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingDelete } = props; // Note that we use object destructuring (const { ticket } = props;) to derive the ticket object from our props. Otherwise, for a ticket attribute like location, we'd need to say props.ticket.location instead of just ticket.location. It is common — but not necessary — to use object destructuring with props in React.

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={props.onClickingEdit}>Update This Ticket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Close this Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;