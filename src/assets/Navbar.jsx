import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <div class="container">
      <nav>
        <ul>
          <li
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate('/marketplace');
            }}
          >
            Marketplace
          </li>
          <li
            onClick={() => {
              navigate('/sell');
            }}
          >
            Sell
          </li>
          <li
            onClick={() => {
              navigate('/docs');
            }}
          >
            Docs
          </li>
        </ul>
      </nav>
    </div>
  );
}
