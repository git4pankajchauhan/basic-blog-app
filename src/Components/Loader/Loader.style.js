import styled from 'styled-components'

export const LoaderDiv = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1000;
  border-radius: inherit;
  display: grid;
  place-items: center;
  .loader {
    height: 40px;
    width: 40px;
  }
`
