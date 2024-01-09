import React from 'react';
import '../Common/Health.scss';
export default function Stepper() {
  return (
    <div class="tabs-section">
      <ul class="stepper-heading">
        <li class="active"><span class="tab-index">1.</span>BASIC DETAILS</li>
        <li class=""><span class="tab-index">2.</span>CHOOSE PLAN</li>
        <li class=""><span class="tab-index">3.</span>ADDITIONAL DETAILS</li>
        <li class=""><span class="tab-index">4.</span>PERSONAL DETAILS</li>
        <li class=""><span class="tab-index">5.</span>PAYMENT</li>

      </ul>
    </div>
  )
}
