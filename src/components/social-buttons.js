import React from 'react';
import styled from '@emotion/styled';

const Icon = styled('div')`
  display: block;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 25px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  :hover {
    box-shadow: 3px 3px 10px #9a9a9a55;
  }
`;

const SocailButtons = () => {
  return (
    <>
      <Icon>
        <a href="https://facebook.com/themaintenplusone">
          <svg
            className="fb-icon"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41 41"
          >
            <title>fb-icon</title>
            <g id="a9d0e4cb-a327-4ef8-aedf-41d30f3be804" data-name="Header">
              <g
                id="aa8d1298-9a26-4138-bd66-367c3e73109d"
                data-name="Soc Icons"
              >
                <g
                  id="b89aed5e-4cdc-418c-a648-869e5395b134"
                  data-name="Facebook"
                >
                  <circle
                    id="be635cb7-2376-4e7a-8b54-d50d0c2730d2"
                    data-name="Oval-3"
                    class="a221fc30-df7f-4444-a05a-29c6d61a60d5"
                    cx="20.5"
                    cy="20.5"
                    r="20"
                    fill="white"
                    stroke="#9a9a9a"
                  />
                  <path
                    class="f246e405-f6b1-463d-9a35-3a68aee84f00"
                    d="M104.1-17.2H101V-19a.8.8,0,0,1,.9-.9H104V-23h-3c-3.3,0-4,2.3-4,3.8v2H95.1V-14H97v9h4v-9h2.7Z"
                    transform="translate(-78.6 34.5)"
                    fill="#9a9a9a"
                  />
                </g>
              </g>
            </g>
          </svg>
        </a>
      </Icon>
      <Icon>
        <a href="https://twitter.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41">
            <title>twitter</title>

            <g data-name="Twitter">
              <circle
                id="a60114d0-b81e-4c71-88e8-a103f2f56398"
                data-name="Oval-3"
                class="f49b3ae2-7e25-48bd-971d-713b6872a638"
                cx="20.5"
                cy="20.5"
                r="20"
                fill="white"
                stroke="#9a9a9a"
              />
              <path
                fill="#9a9a9a"
                stroke="#9a9a9a"
                class="f5cfff22-fc9c-468f-9405-a6326d60552b"
                d="M27.5,16.7A3.2,3.2,0,0,0,29,14.8a5.3,5.3,0,0,1-2.2.8,3.3,3.3,0,0,0-2.5-1.1A3.5,3.5,0,0,0,20.8,18a1.9,1.9,0,0,0,.1.8,9.5,9.5,0,0,1-7.2-3.7,4.1,4.1,0,0,0-.5,1.8,3.7,3.7,0,0,0,1.6,3,4.3,4.3,0,0,1-1.6-.5h0A3.4,3.4,0,0,0,16,22.9l-.9.2h-.7a3.4,3.4,0,0,0,3.3,2.4A6.8,6.8,0,0,1,13.3,27h-.8a9.7,9.7,0,0,0,5.3,1.6,10,10,0,0,0,10-10.1V18a9.8,9.8,0,0,0,1.7-1.8Z"
              />
            </g>
          </svg>
        </a>
      </Icon>
      <Icon>
        <a href="https://instagram.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41">
            <title>Instagram</title>
            <circle cx="20.5" cy="20.5" r="20" fill="#fff" stroke="#9a9a9a" />
            <path
              d="M198.5-17.8a1,1,0,0,0-1.1,1,1.1,1.1,0,0,0,1.1,1.1,1.1,1.1,0,0,0,1.1-1.1,1,1,0,0,0-1.1-1M194-9a3.1,3.1,0,0,1-3-3,3.1,3.1,0,0,1,3-3,3.1,3.1,0,0,1,3,3,3.1,3.1,0,0,1-3,3m0-7.7a4.7,4.7,0,0,0-4.7,4.7A4.7,4.7,0,0,0,194-7.3a4.7,4.7,0,0,0,4.7-4.7,4.7,4.7,0,0,0-4.7-4.7m7.3,7.2a10.9,10.9,0,0,1-.1,1.8,3.4,3.4,0,0,1-2.7,2.8,7.8,7.8,0,0,1-2.2.2h-5.1a5.2,5.2,0,0,1-1.7-.2,3.4,3.4,0,0,1-2.4-1.9,5.1,5.1,0,0,1-.4-2v-.4h0v-5.5a4.7,4.7,0,0,1,.2-1.7,3.1,3.1,0,0,1,2-2.4,4.3,4.3,0,0,1,1.9-.4h7.4a4.2,4.2,0,0,1,1.9.9,3.2,3.2,0,0,1,1,1.8,7.8,7.8,0,0,1,.2,2.2h0v4.7m1.7-4.8h0a11.4,11.4,0,0,0-.2-2.6,5,5,0,0,0-4.2-3.9h-7.8a14.7,14.7,0,0,0-2.6.5,5.1,5.1,0,0,0-2.9,3.6,6.9,6.9,0,0,0-.3,2h0v5.5h0v.3a8.8,8.8,0,0,0,.6,2.6,4.5,4.5,0,0,0,3.5,2.9l2.1.3h5.1a11.8,11.8,0,0,0,2.6-.2,5,5,0,0,0,3.9-4.2,15,15,0,0,0,.2-2v-4.9"
              transform="translate(-173.5 32.5)"
              fill="#9a9a9a"
              fill-rule="evenodd"
            />
          </svg>
        </a>
      </Icon>
    </>
  );
};

export default SocailButtons;
