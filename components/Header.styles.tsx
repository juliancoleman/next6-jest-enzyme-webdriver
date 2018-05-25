import css from "styled-jsx/css";

export default css`
  header {
    background: #333;
    padding: 10px;
  }

  a {
    border-radius: 4px 4px;
    color: white;
    display: inline-block;
    margin: 0 10px;
    padding: 8px 24px;
    text-decoration: none;
    transition: 0.15s all ease-in-out;
  }

  a:hover {
    background: rgba(255, 255, 255,0.25);
    color: #81C784;
    font-style: italic;
  }
`;
