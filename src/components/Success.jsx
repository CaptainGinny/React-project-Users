import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="./assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>Everyone {count} an invitation has been sent to users.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">
        Back
      </button>
    </div>
  );
};
